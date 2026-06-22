const keywords = [
  'Blank canvas',
  'Search failure',
  'Repetitive editing',
  'AI trust',
  'Content recommendation',
  'Creation flow',
];

export function ProductInterest() {
  return (
    <section className="interest-section" id="about" aria-labelledby="interest-title">
      <div>
        <p className="eyebrow">Next Problem Space</p>
        <h2 id="interest-title">What I want to solve next</h2>
      </div>
      <div className="interest-copy">
        <p>
          사용자가 빈 화면 앞에서 멈추거나, 원하는 결과를 찾지 못해 반복 수정하는 순간에
          관심이 있습니다.
        </p>
        <p>
          검색·추천·AI가 단순히 결과를 생성하는 기능을 넘어, 사용자의 의도를 이해하고 다음
          행동을 명확하게 만드는 제품을 기획하고 싶습니다.
        </p>
        <ul className="keyword-list" aria-label="관심 문제 영역">
          {keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
