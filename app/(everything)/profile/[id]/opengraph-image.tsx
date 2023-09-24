import { ImageResponse } from 'next/server'
import {redisClient} from "@/lib/redis";
import {User} from "next-auth";

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({params: {id}}:{ params: { id: string } }) {
    const user = await redisClient.get(`user:${id}`) as User

    const image = user.image ? user.image : ''

    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: 'black',
                    backgroundSize: '150px 150px',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        justifyItems: 'center',
                    }}
                >
                    <img
                        alt="Vercel"
                        height={250}
                        src={image}
                        style={{ margin: '0 30px', borderRadius: '50%', border: '5px solid white', boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',  objectFit: 'contain' }}
                        width={250}
                    />
                </div>
                <div
                    style={{
                        fontSize: 60,
                        fontStyle: 'normal',
                        letterSpacing: '-0.025em',
                        color: 'white',
                        marginTop: 30,
                        padding: '0 120px',
                        lineHeight: 1.4,
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {user.name}
                </div>
            </div>
        )
    )
}