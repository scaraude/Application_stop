import { useEffect, useState } from "react";
import { requestGetJson } from "../../../utils/api-request";

export type Comment = {
    id: string;
    score: number;
    createdAt: Date;
    userId: string;
    text: string;
}

export const useComments = (spotId: string | undefined) => {
    const [comments, setComments] = useState<Comment[] | undefined>([]);

    useEffect(() => {
        if (!spotId) return;
        (async () => {
            const comments = <Comment[] | undefined>await requestGetJson(`/api/comment/${spotId}`);
            setComments(comments)
        })
    }, [spotId]);

    return comments;
}