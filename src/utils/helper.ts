import { PostItem } from "@src/types";
import { members } from "@members";
import posts from "@.contents/posts.json";

export function getMemberByMemberId(id: string) {
  return members.find((member) => member.memberId === id);
}
export function getMemberPostsByMemberId(id: string) {
  return (posts as PostItem[]).filter((item) => item.authorId === id);
}
export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || "blog";
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `//www.google.com/s2/favicons?domain=${hostname}`;
}
export function getMemberPath(id: string) {
  return `/members/${encodeURIComponent(id)}`;
}
