"use server";

import { SITE_SERVER } from "@/lib/utils/constants";

const API_KEY = process.env.GANSO_TOKEN || "";

const headers = {
  "X-API-Key": API_KEY,
};

export async function getOrCreateUser(userId: string) {
  const res: {
    hasError: boolean;
    data: null | GansoDBUser;
  } = {
    hasError: false,
    data: null,
  };

  const data = await fetch(`${SITE_SERVER}user/GetorCreate/${userId}`, {
    method: "POST",
    headers,
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      res.hasError = true;
    });

  if (res.hasError) return res;

  res.data = data as GansoDBUser;

  return res;
}

export async function intakeUser(args: GansoUserIntake) {
  const res: {
    hasError: boolean;
    data: null | GansoDBUser;
  } = {
    hasError: false,
    data: null,
  };

  const data = await fetch(`${SITE_SERVER}user/IntakeComplete/`, {
    method: "PUT",
    body: JSON.stringify(args),
    headers,
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      res.hasError = true;
    });

  if (res.hasError) return res;

  res.data = data as GansoDBUser;

  return res;
}

export async function createComment(args: GansoCreateComment) {
  const res: {
    hasError: boolean;
    data: null | GansoCommentRes;
  } = {
    hasError: false,
    data: null,
  };
  const data = await fetch(SITE_SERVER + "comment/CreateComment", {
    headers,
    method: "POST",
    body: JSON.stringify(args),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      res.hasError = true;
    });

  if (res.hasError) return res;

  res.data = data as GansoCommentRes;

  return res;
}

export async function createReply(args: GansoCreateReply) {
  const res: {
    hasError: boolean;
    data: null | GansoReplyRes;
  } = {
    hasError: false,
    data: null,
  };
  const data = await fetch(SITE_SERVER + "comment/CreateReply", {
    headers,
    method: "POST",
    body: JSON.stringify(args),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      res.hasError = true;
    });

  if (res.hasError) return res;

  res.data = data as GansoReplyRes;

  return res;
}

export async function editResponse(
  args: GansoEditComRep,
  isReply: boolean = true
) {
  const res: {
    hasError: boolean;
    data: null | GansoDBReply | GansoDBComment;
  } = {
    hasError: false,
    data: null,
  };
  const data = await fetch(
    SITE_SERVER + `comment/Edit${isReply ? "Reply" : "Comment"}`,
    {
      headers,
      method: "PUT",
      body: JSON.stringify(args),
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      res.hasError = true;
    });

  if (res.hasError) return res;

  res.data = data;

  return res;
}

export async function deleteResponse(
  args: { id: number },
  isComment: boolean = true
) {
  const res: {
    hasError: boolean;
    data: null | string;
  } = {
    hasError: false,
    data: null,
  };
  await fetch(
    SITE_SERVER + `comment/Delete${isComment ? "Comment" : "Reply"}`,
    {
      headers,
      method: "DELETE",
      body: JSON.stringify(args),
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      res.hasError = true;
    });

  if (res.hasError) return res;

  res.data = "Deleted successfully";

  return res;
}
