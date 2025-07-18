import { BASE_URL } from "../config";

/**
 * 로그인 유저의 모든 스크랩 내역을 불러오는 메서드
 * @param grantType
 * @param token
 * @returns
 */
export async function getAllScrap(grantType: string, token: string) {
  try {
    return await fetch(`${BASE_URL}/api/scrap`, {
      headers: {
        Authorization: `${grantType} ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}
