export type Metric = {
  value: string;
  label: string;
  context: string;
};

export const metrics: Metric[] = [
  {
    value: '1.7×',
    label: '메인페이지 평균 참여시간 증가',
    context: 'GA4 기준 핵심 페이지 개선 전후 사용자 참여 흐름을 비교했습니다.',
  },
  {
    value: '30%',
    label: '백오피스 운영 처리시간 단축',
    context: '상태 기준과 처리 흐름을 정리해 반복 확인과 수작업을 줄였습니다.',
  },
  {
    value: '14',
    label: 'LMS 리뉴얼 Sprint 운영',
    context: '권한, 콘텐츠, 학습 흐름을 나누어 단계적으로 출시 범위를 관리했습니다.',
  },
  {
    value: '90%',
    label: '기획팀 업무 수행률',
    context: '스프린트 산출물과 협업 요청의 완료 흐름을 추적했습니다.',
  },
  {
    value: '50%+',
    label: '주문 파일 가이드 이용률',
    context: '파일 오류와 CS 반복을 줄이기 위한 사용자 가이드 접점을 설계했습니다.',
  },
];
