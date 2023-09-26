import type { GhostAPI } from "@tryghost/content-api";
import type { PrismaClient } from "@prisma/client";
import type { User } from "firebase/auth";

declare global {
  var ghost: GhostAPI;
  var prisma: PrismaClient;
  var ghostAdmin: GhostAPI;
}

interface NlUser extends User {
  username?: string;
  image?: string;
  verified: boolean;
  banned: boolean;
}
