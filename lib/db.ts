import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
// 전역 변수에 PrismaClient 인스턴스가 이미 존재하면 그것을 사용하고, 그렇지 않으면 새로운 PrismaClient 인스턴스를 생성합니다.
export const db = global.prisma || new PrismaClient();

// 개발 환경에서는 전역 변수에 PrismaClient 인스턴스를 할당합니다.
// 이를 통해 개발 중 핫 리로딩이 발생해도 기존 인스턴스를 재사용할 수 있습니다.

if (process.env.NODE_ENV !== "production") {
  global.prisma = db;
}
