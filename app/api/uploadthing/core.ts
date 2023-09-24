import {createUploadthing, type FileRouter} from "uploadthing/next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({image: {maxFileSize: "4MB"}})
        // Set permissions and file types for this FileRoute
        .middleware(async ({req}) => {
            // This code runs on your server before upload
            const user = await getServerSession(authOptions)

            // If you throw, the user will not be able to upload
            if (!user) throw new Error("Unauthorized");

            const {id} = user.user;

            // Whatever is returned here is accessible in onUploadComplete as `metadata`
            return {userId: id};

        }).onUploadComplete(async ({metadata, file}) => {
            // This code runs on your server after upload
            // metadata is the object returned from the middleware function
            // file is the uploaded file
            console.log("Uploaded file", file);
            console.log("Metadata", metadata);
        })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;