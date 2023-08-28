//DB Schema

type GansoDBComment = {
  id: number;
  user_id: string;
  post_id: string;
  edited: boolean;
  date_time: string;
  content: string;
};

type GansoDBReply = {
  id: number;
  user_id: string;
  comment_id: number;
  edited: boolean;
  date_time: string;
  content: string;
};

type GansoDBPermission = {
  id: number;
  title: string;
  created_at: string;
};

type GansoDBPost = {
  id: string;
  slug: VerifyString;
  audio_url: VerifyString;
};

type GansoDBPostLikeorSave = {
  user_id: string;
  post_id: string;
  created_at: string;
};

type GansoDBUser = {
  id: string;
  verified: boolean;
  banned: boolean;
  username: VerifyString;
  image: VerifyString;
  url: VerifyString;
  url_verified: VerifyBoolean;
};

type GansoDBUserPermission = {
  user_id: string;
  permission_id: string;
  created_at: string;
};

// Verified objects are used in place of 'null' in Go sql responses. Valid: false is equal to a null value in the db.

type VerifyString = {
  String: string;
  Valid: boolean;
};

type VerifyBoolean = {
  String: boolean;
  Valid: boolean;
};

// Ganso Response Objects Returned from API that don't match DB Models.
interface GansoPostRes extends GansoDBPost {
  comment_count: number;
  like_count: number;
}

type GansoReplyRes = {
  id: number;
  username: VerifyString;
  image: VerifyString;
  date_time: string;
  content: string;
};

interface GansoCommentRes extends GansoReplyRes {
  count_reply: number;
  replies: Array<GansoReplyRes>;
}

type GansoLikeSaveState = {
  isLiked: boolean;
  isSaved: boolean;
};

type GansoDeleteRes = {
  success: boolean;
};

//Ganso Request Object Formats.

type GansoCreateComment = {
  user_id: string;
  post_id: string;
  content: string;
};

type GansoCreateReply = {
  user_id: string;
  comment_id: number;
  content: string;
};

type GansoEditComRep = {
  id: number;
  content: string;
};

type GansoEditPostAudio = {
  id: number;
  AudioUrl: string;
};

type GansoLikeSaveReq = {
  user_id: string;
  post_id: string;
};

type GansoUserIntake = {
  id: string;
  username: string;
  image: string;
};

type GansoGetReq = {
  limit: number;
  page_num: number;
};

interface GansoCommentsGet extends GansoGetReq {
  post_id: string;
}

interface GansoRepliesGet extends GansoGetReq {
  comment_id: number;
}

interface GansoSavedGet extends GansoGetReq {
  user_id: string;
}
