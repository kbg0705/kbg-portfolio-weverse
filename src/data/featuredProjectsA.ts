import type { Project, ProjectImage } from '../types/project';
import { makePlaceholder as image } from './imagePlaceholders';

const cover = (slug: string, alt: string, caption: string, objectFit: ProjectImage['objectFit'] = 'cover'): ProjectImage => ({
  ...image('cover', alt, caption),
  src: `public/images/projects/${slug}/01-cover.png`,
  objectFit,
});

export const featuredProjectsA: Project[] = [
  {
    slug: 'printbank-npb', order: 1, tier: 'featured', service: 'Printbank / NPB', company: '프린트뱅크', cardMeta: '프린트뱅크 · Product Manager · 2025–현재', category: ['Product', 'E-commerce'], title: '인쇄 이커머스 제품 개선',
    tagline: '흩어진 운영 이슈를 우선순위가 있는 제품 개선 체계로 전환했습니다.', period: '2025.03–현재', role: '인쇄 이커머스 서비스 기획 · PM',
    contribution: 'FO·BO 기획 · 정책 및 예외 케이스 · 데이터 검수 · QA · 운영 이슈 개선', status: '기획·개발·QA 병행', tools: ['Figma', 'Jira', 'GA4', 'Google Sheets', 'SQL/DB 구조 협의'], tags: ['FO/BO', 'Policy', 'Operations'],
    problem: '운영 이슈와 VOC가 여러 채널에 흩어져 문제 정의와 개발 진행 상태를 함께 보기 어려웠습니다.', decision: '운영 피드백을 FD 문제 정의와 RP 개선 과제로 구조화하고 상태·조건·예외·우선순위를 정책으로 만들었습니다.',
    impact: [{ value: 'FD·RP', label: '운영 이슈 백로그 구조화', description: 'VOC·정책·QA 상태를 연결', type: 'delivered' }, { value: 'FO·BO', label: '개선 과제 개발·QA 연결', description: '회원·주문·배송·CS 관련 과제', type: 'delivered' }],
    detailPageEnabled: true, thumbnail: { ...cover('printbank-npb', 'NPB FO·BO 제품 개선 프로젝트 대표 화면', 'FD·RP 백로그와 FO·BO 정책 연결을 보여주는 이미지', 'contain'), isConfidential: true },
  },
  {
    slug: 'printbank-main', order: 2, tier: 'featured', service: 'Printbank Main Renewal', company: '프린트뱅크', cardMeta: '프린트뱅크 · Product Manager · 2025–현재', category: ['Product', 'E-commerce'], title: 'Printbank 메인페이지 개선',
    tagline: 'GA4 행동 데이터를 바탕으로 상품 탐색과 상담 진입 흐름을 재설계했습니다.', period: '2025.03–현재', role: '인쇄 이커머스 서비스 기획 · PM',
    contribution: 'GA4 분석 · IA 재설계 · 배너·팝업·상담 CTA 개선 · 성과 확인', status: '개선 완료 · 지표 확인', tools: ['GA4', 'Figma', 'Google Sheets'], tags: ['GA4', 'IA', 'Experiment'],
    problem: '기존 메인은 신규 사용자가 상품을 탐색하거나 상담으로 진입하기 어려운 구조였습니다.', decision: '상품 탐색, 제작 안내, 상담 CTA의 우선순위를 재정리하고 메인 정보 구조를 개선했습니다.',
    impact: [{ value: '1.7×', label: '평균 참여시간 증가', description: '1분 14초에서 2분 8초로 증가', type: 'measured' }],
    detailPageEnabled: true, thumbnail: cover('printbank-main', 'Printbank 메인페이지 개선 프로젝트 대표 화면', 'GA4 분석과 메인 정보 구조 개선을 보여주는 이미지', 'cover'),
  },
  {
    slug: 'magic-ecole', order: 3, tier: 'featured', service: 'Magic Ecole', company: 'Magic Ecole', cardMeta: 'Magic Ecole · Product Owner · 2023–2024', category: ['Product', 'SaaS'], title: '교육 SaaS LMS 리뉴얼',
    tagline: '반복 개발이 필요했던 권한과 콘텐츠 구조를 확장 가능한 제품 정책으로 재설계했습니다.', period: '2023.07–2024.02', role: 'LMS 서비스 기획 · PO', contribution: 'LMS FO·BO 기획 · 권한 및 콘텐츠 정책 · Figma 화면정의서 · Jira Sprint 운영', status: '기획 완료 · 단계적 개발',
    tools: ['Figma', 'Jira', 'Confluence', 'Google Docs'], tags: ['SaaS', 'Permission', 'Scrum'], problem: '고정된 권한 체계와 낮은 콘텐츠 재사용성 때문에 새로운 운영 요구마다 추가 개발이 필요했습니다.', decision: '전역 권한과 강의 내부 권한을 분리하고 Custom Role과 콘텐츠 라이브러리를 설계했습니다.',
    impact: [{ value: '14', label: 'Sprint 운영', description: 'Jira 기반 개발 협업', type: 'delivered' }, { value: '90%', label: '기획팀 업무 수행률', description: '준비 상태와 착수 기준 개선', type: 'measured' }, { value: 'NIPA', label: '유망 SaaS 지원 사업 통과 기여', description: '외부 지원 선정', type: 'recognition' }],
    detailPageEnabled: true, thumbnail: image('cover', 'Magic Ecole LMS 리뉴얼 프로젝트 구조', '권한 매트릭스와 LMS 계층 구조를 보여주는 이미지'),
  },
  {
    slug: 'tax-canvas', order: 4, tier: 'featured', service: 'Tax Canvas', company: 'Tax Canvas', cardMeta: 'Tax Canvas · PM · 2024', category: ['Product', 'AI & Search'], title: '생성형 AI 세무 검색서비스 기획',
    tagline: 'AI의 답변을 기다리는 시간을 근거를 탐색하고 판단하는 경험으로 바꿨습니다.', period: '2024.04–2024.07', role: '서비스 기획 팀장 · PM', contribution: '제품 흐름 · AI 상태 UX · 검색·근거 구조 · 협업 프로세스', status: 'v1.1 요구사항 완료 · 개발 착수', tools: ['Figma', 'Jira', 'Confluence', 'RAG 구조 협의'], tags: ['Generative AI', 'RAG', 'Trust'],
    problem: '긴 분석 시간, 복수 쟁점 비교, 결과 신뢰성 문제가 전문가의 판단 흐름을 끊었습니다.', decision: '부분 결과, 쟁점 이동, 재분석, 판례·예규 근거 확인을 하나의 검토 흐름으로 설계했습니다.',
    impact: [{ value: 'v1.1', label: '개발 착수 가능한 요구사항 완료', description: '검색·근거·AI 상태 UX 포함', type: 'delivered' }, { value: '외부 선정', label: '증빙 가능한 창업 지원 선정', description: '확인 가능한 항목만 표기', type: 'recognition' }],
    detailPageEnabled: true, thumbnail: cover('tax-canvas', 'Tax Canvas 생성형 AI 세무 검색서비스 대표 화면', '쟁점·분석 결과·근거 문서 연결 화면', 'contain'),
  },
];
