import {createUploadthing, type FileRouter} from "uploadthing/next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redisClient} from "@/lib/redis";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({image: {maxFileSize: "2MB"}})
        // Set permissions and file types for this FileRoute
        .middleware(async ({req}) => {
            // This code runs on your server before upload
            const session = await getServerSession(authOptions)

            // If you throw, the user will not be able to upload
            if (!session) throw new Error("Unauthorized");

            const {user} = session;

            // Whatever is returned here is accessible in onUploadComplete as `metadata`
            return {user};

        }).onUploadComplete(async ({metadata, file}) => {
            // This code runs on your server after upload
            // metadata is the object returned from the middleware function
            // file is the uploaded file
            console.log("User", metadata.user)
            console.log("Uploaded file", file);
            console.log("Metadata", metadata);
            metadata.user.image = file.url;
            await redisClient.set(`user:${metadata.user.id}`, JSON.stringify(metadata.user))
        })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;