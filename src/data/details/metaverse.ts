import type { ProjectDetail } from '../../types/project';
import { makePlaceholder as image } from '../imagePlaceholders';
import { featuredProjectsB } from '../featuredProjectsB';

export const metaverseDetail: ProjectDetail = {
  slug: 'gachon-metaverse-campus',
  overview: '넓은 캠퍼스에서 목적지를 찾기 어렵고 반복 참여할 콘텐츠가 부족한 문제를 이동 UX와 학교 IP 기반 콘텐츠로 해결했습니다.',
  context: '초기 사용자는 이동 중 이탈했고 기존 공간은 방문 목적과 콘텐츠가 연결되지 않았습니다.',
  executiveSummary: { problem: '사용자가 길을 잃고 방문 후 다시 참여할 이유가 부족했습니다.', decision: '포털·홈·차량 호출로 이동을 개선하고 튜토리얼·랭킹을 갖춘 레이싱 콘텐츠를 만들었습니다.', outcome: '8명 팀을 운영해 리뉴얼과 행사를 완료했고 2시간 동안 100명 참여, 만족도 4.5/5를 기록했습니다.' },
  evidence: [{ label: '사용자 피드백', description: '이동 시간과 길찾기 어려움, 콘텐츠 부족을 확인했습니다.' }, { label: '공간 동선 분석', description: '초기 접속 지점에서 주요 목적지까지 흐름을 점검했습니다.' }, { label: '행사 데이터', description: '참여 인원과 만족도 설문을 수집했습니다.' }],
  keyQuestion: '넓은 가상 캠퍼스에서 사용자가 목적지를 빠르게 찾고 다시 참여하게 하려면 무엇이 필요할까?',
  decisions: [
    { number: '01', title: '포털·홈·차량 호출로 길찾기 개선', evidence: '사용자는 넓은 맵을 이동하다 목적지를 찾지 못하고 이탈했습니다.', decision: '주요 장소로 이동하는 포털과 홈 버튼, 차량 호출을 제공했습니다.', specification: '6개 목적지, 홈 복귀, 차량 소환·탑승 상태를 정의했습니다.', effect: '이동 부담을 줄이고 콘텐츠 접근성을 높였습니다.' },
    { number: '02', title: '학교 IP 기반 레이싱 콘텐츠', evidence: '공간을 둘러본 뒤 반복 참여할 목적이 부족했습니다.', decision: '학교 대표 버스 IP와 캠퍼스 공간을 레이싱 콘텐츠로 연결했습니다.', specification: '튜토리얼, NPC 진입, 레이싱 맵, 실시간 랭킹을 설계했습니다.', effect: '탐색 공간을 참여형 콘텐츠로 전환했습니다.' },
    { number: '03', title: '행사 운영 흐름 단순화', evidence: '제한된 시간 안에 많은 사용자가 참여해야 했습니다.', decision: '진입·튜토리얼·게임·설문·보상 흐름을 단순화했습니다.', specification: '현장 안내 역할, 참여 동선, 설문과 상품 지급 기준을 정했습니다.', effect: '2시간 동안 100명이 참여하고 만족도 4.5/5를 기록했습니다.' },
  ],
  artifacts: [image('artifact', '캠퍼스 이동 구조', '포털·홈·차량 호출 동선'), image('product', '레이싱 콘텐츠', '튜토리얼·랭킹·학교 IP 활용 화면'), image('outcome', '행사 운영 결과', '참여 인원과 만족도')],
  collaboration: ['8명 팀의 역할과 Sprint 단위를 조율했습니다.', '이동 기능과 콘텐츠 우선순위를 정했습니다.', '행사 현장에서 참여 동선과 안내 역할을 운영했습니다.'],
  outcomes: featuredProjectsB[2].impact,
  learnings: ['공간형 서비스는 이동 거리와 목적지 인지가 핵심 UX가 될 수 있습니다.', '콘텐츠는 서비스의 고유 맥락과 연결될 때 참여 이유가 강해집니다.', '행사 운영도 제품 경험으로 봐야 합니다.'],
  images: [], previousProject: 'print-decision-support',
};
