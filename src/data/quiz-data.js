import React from 'react';

const QUESTION_DATA = [
  {
    question: <span>Joseph applied to the BCPNP Entrepreneur Base programme, and the following is his application's provincial procedural history: On January 10th, 2021, he "registered" to submit his profile to the BCPNP "pool". On April 17th, 2021, he got a "invitation to apply" from the BC government. On June 27th, 2021, he filed a comprehensive application to the BC Government (all completed/signed forms, provincial processing fees, supporting papers, third-party evaluation of his net worth, and so on). On December 1st, 2021, he got a letter confirming the approval of his immigration application (along with a signed Performance Agreement). When does Joseph's dependent child's age become "locked in"? Choose the most appropriate response. Assume that the immigration applicant met/satisfied all procedural and substantive criteria of the programme for the purposes of your response.</span>,
    answers: [
      <span>April 17th 2021.</span>,
      <span>January 10th 2021.</span>,
      <span>June 27th 2021.</span>,
      <span>December 1st 2021.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph wants to file a complaint against Maria, an RCIC he hired to help him qualify for a permanent residency visa under the Federal Skilled Trades category. Because she was often non-communicative with him, failed to fulfil planned appointments, and seemed inebriated at some of the sessions that she did attend, Joseph feels Maria was inadequate in her duty. The CICC may undertake any of the following after receiving Joseph's complaint and appointing a member to conduct an inquiry, except:</span>,
    answers: [
      <span>Refer the complaint to the CICC Discipline Committee.</span>,
      <span>Return the complaint to the investigator for further investigation.</span>,
      <span>Suspend Maria's CICC membership until their investigation is complete.</span>,
      <span>Decline to refer the complaint to the CICC Discipline Committee.</span>
    ],
    correct: 3,
    explanation: <span>Upon receiving a complaint about one of its members, the Complaints Committee may return the complaint to the investigator for further investigation, refer the complaint to the Discipline Committee, or decline to refer the complaint to the Discipline Committee. The Complaints Committee is not authorized to suspend the membership of an CICC member. Reference: CICC Complaints and Discipline Process.</span>
  },
  {
    question: <span>Joseph is an English chef. Joseph's brother just started a restaurant in Mississauga, and he arrived on a visitor's visa to assist him. Joseph extended his guest status after the restaurant's debut and has been assisting his brother with the business. Joseph develops meals, organizes, and leads the culinary crew and, on occasion, cooks. Joseph is not compensated. His brother provides him with lodging and pocket money. Is Joseph's work considered work?</span>,
    answers: [
      <span>They are considered work as he is in direct competition with activities which could be performed by a Canadian citizen or permanent resident.</span>,
      <span>They are not considered work as he does not perceive a salary and he is only helping his brother for room and board and pocket money.</span>,
      <span>They are not considered work as Joseph is not on the restaurant's payroll and it would be very difficult to prove that he is working.</span>,
      <span>They are considered work because the place of work is a restaurant and Joseph is a chef.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph was born in India when her mother, a Canadian citizen, was stationed at the Canadian High Commission in Dheli. The concept of jus sanguinis was used to grant her citizenship. She is now 25 years old and has studied in India, where she found the guy of her dreams, married him, and had a kid. She intends to bring him as well as the kid to Canada. Joseph must decide what to do in order to bring the kid to Canada.</span>,
    answers: [
      <span>She can submit a sponsorship application for her child.</span>,
      <span>She can apply for a Canadian citizenship certificate for her child.</span>,
      <span>She can bring her to Canada without applying for any document.</span>,
      <span>She cannot bring her to Canada unless her husband comes too.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>The situation below is followed by three questions. Joseph and his family arrived in Canada and applied for refugee status. He said in his story that he was a member of the Tamil Eelam intellectual branch of the Liberation Tigers of Tamil Eelam. This group is thought to be implicated in crimes against humanity. Joseph maintains he has never been engaged in any kind of military warfare. His responsibilities included scheduling meetings with foreign journalists and documenting historical events for future reference. Is Joseph going to be able to pursue a refugee claim?</span>,
    answers: [
      <span>Yes, because he was not involved in the armed struggle.</span>,
      <span>Yes, as long as he meets the definition of Convention Refugee.</span>,
      <span>No, he would be inadmissible for crimes against humanity.</span>,
      <span>No, he will not be found to be credible and will not be referred.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is a 45-year-old Colombian computer engineer with a NOC skill level of A. She has a WES- accredited master's degree and has taken the IELTS and earned the best score in all of the abilities examined. She has worked in her profession for the last eight years, doing a significant proportion of the primary activities for her profession as defined by NOC obligations. Her brother is a Canadian citizen who lives in Canada. In the Federal Skilled Worker Category, she obtains 69 points, while in Express Entry, she receives 386 points. The most recent CRS score was 441. Maria is desperate to see her brother in Canada and will go to any length to gain permanent residency. Question: If she didn't want to work on a PGWP, what would be the best way for her to apply for permanent residence?</span>,
    answers: [
      <span>She can apply under the Ontario Nominee PHD stream.</span>,
      <span>She should take the job her brother had found for her.</span>,
      <span>She can take French courses to improve her score.</span>,
      <span>Since she likes to study she can do another degree.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Joseph is a Canadian permanent resident who married his high school sweetheart and applied to sponsor her in Lagos. While he was in Canada visiting his wife, they decided to attempt to acquire her a temporary residence visa (TRV) so she could join him. The TRV was turned down. It took four years for the application to obtain a denial letter. Counsel wrote the visa post around 8 times during that period, asking what was causing the delay, but got no answer. The visa post sought images of the applicant's and sponsor's parents at some time. Counsel demanded an explanation for why they need their parents' photographs. The visa office had not responded. According to the denial letter, the visa post had information from when they filed for her TRV that the pair had similar facial characteristics, and the officer assumed they were siblings attempting to get around the rules. What would you have done differently if you were the officer?</span>,
    answers: [
      <span>He should not have stated that the couple appeared to be siblings even if he thought it.</span>,
      <span>He should have stated that the officer who refused the TRV gave him the information.</span>,
      <span>He should have accepted the application as the couple was legally married.</span>,
      <span>He should have given the couple the opportunity to disabuse him of his concerns.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Alex is a graphic designer from Germany who is 30 years old. He has worked in Joseph for the last four years, but he wants to go to Toronto since he has heard that there are many fascinating freelancing assignments and prospects in his profession there. He meets with Joseph, an RCIC, to explore coming to Canada as permanent residents under the self-employed stream with his wife, Maria. Alex informs Joseph that he obtained a two-year graphic design diploma at a Frankfurt art school and received a CLB 6 on his IELTS test last year. He also notes Maria's two-year business administration diploma and that he has an uncle who resides in Cambridge, Ontario. Under the self-employed stream, how many points will Alex be given?</span>,
    answers: [
      <span>48 points.</span>,
      <span>68 points.</span>,
      <span>74 points.</span>,
      <span>94 points.</span>
    ],
    correct: 3,
    explanation: <span>Under the self-employed stream, Alex will score (10 + 20+8 + 30+ 6) = 74 points. Age: 30 (IRPR, r 102.1) = 10 points. Education: 2-year diploma (IRPR, r 102 .. 2) = 20 points. Language: CLB 6 (IRPR, r 102.3) = 8 points. Experience: 4 years (IRPR, rr 88 and 103(3)) = 30 points. Adaptability: spouse's education and relative in Canada = 6 points.</span>
  },
  {
    question: <span>Which of the following statements is true if a person files a complaint with the CICC against an RCIC?</span>,
    answers: [
      <span>The RCIC can appeal a decision of the complaints Committee to the Appeal Committee.</span>,
      <span>The complaint can be made to the CICC anonymously.</span>,
      <span>The RCIC can appeal an order of the Disciplinary Committee to the Appeal Committee.</span>,
      <span>The RCIC and the complainant can appear before the Complaints Committee to make submissions before a decision to refer the complaint to the Disciplinary Committee.</span>
    ],
    correct: 3,
    explanation: <span>It is not true that the complaint can be made to the CICC anonymously: the CICC cannot take a complaint through the disciplinary process unless the RCIC has been given full and fair opportunity to respond to the complaint, including use of the name of the person who made the complaint. It is not true that the RCIC can appeal a decision of the complaints committee to the Appeal committee: decisions of the Complaints Committee to refer a complaint to the Disciplinary Committee are final and not subject to appeal. It is not true that the RCIC and the complainant can appear before the Complaints Committee to make submissions before a decision to refer the complaint to the Disciplinary Committee: neither the complainant nor the RCIC may attend meetings of the Complaints Committee, which are closed to the public. The Complaints Committee is merely a screening committee; it makes no decisions about the merits of a complaint and cannot impose any penalties.</span>
  },
  {
    question: <span>You're working on a TRP application for Joseph, an Irish musician, to submit to the London High Commission. Three years ago, he was convicted of break-and-entry. Joseph is 56 years old and the main vocalist of the Irish Blessings, a six-piece band that has become a worldwide musical hit. Joseph has no prior convictions or immigration infractions on his record. The performance, which will take place in six weeks at Massey Hall in Toronto, is already sold out. The officer has discretion under IRPA section 24 to award a TRP to an inadmissible individual to enable them to enter Canada. In this circumstance, the officer should consider the following essential reason or considerations while exercising their discretion under IRPA s 24:</span>,
    answers: [
      <span>The significant benefit to Canada and the impact of cancellation on the Canadian audience.</span>,
      <span>Joseph's reason for coming to Canada versus any risk he poses to the public.</span>,
      <span>Under IRPA s 24(1), the only consideration is whether Joseph has been rehabilitated.</span>,
      <span>Whether the costs and difficulties Joseph would suffer are unreasonable, undeserved, and disproportionate in light of a single offence.</span>
    ],
    correct: 2,
    explanation: <span>The IRCC Guidelines state that a TRP under IRPA s 24 will be granted where the need for the foreign national to enter or remain in Canada is compelling and those needs outweigh any risk to Canadians or Canadian society. Reference: IRCC . Hardship to Joseph is not by itself a factor, nor is the impact on Canadians. Nor is there any one predominant factor. However, all circumstances can be taken into account under IRPA s 24(1) in the context of whether the reasons are compelling and assessing the risk.</span>
  },
  {
    question: <span>Which programme does not need a verification report from a third-party accounting company to determine an applicant's net worth?</span>,
    answers: [
      <span>SINP Entrepreneur Program.</span>,
      <span>Manitoba PNP Entrepreneur Program.</span>,
      <span>Quebec Immigrant Investor Program.</span>,
      <span>Manitoba PNP Entrepreneur Program and SINP Entrepreneur Program.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Alex is a Canadian citizen who wants to apply for her parents' Super visas. Alex works as a teacher and earns a comfortable living. Her parents are planning a visit soon, and she's wondering whether she'll need to acquire medical insurance for them and how long she'll need it for.</span>,
    answers: [
      <span>No, her parents will not be required to pay for a medical insurance if they have medical heath coverage back home.</span>,
      <span>No, they do not need to pay for a medical insurance since his company has a good coverage for family members.</span>,
      <span>Yes, her parents must pay for medical insurance for 12 months and must provide a proof of payment and insurance coverage.</span>,
      <span>Yes, her parents must pay medical insurance for 6 months only since visitors are allowed to stay in Canada upon their entry up to 6 months and they must provide a proof of the payment and insurance terms and coverage.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Alex, 47, arrived in Canada five years ago as a foreign worker. He met Maria, a Canadian citizen who sponsored him under the spouse and common-law partner in Canada Class as a common-law partner. On January 1, 2016, he acquired his permanent residency and stayed in Canada with Maria. He has been accompanying his wife, who works for the Canadian Consulate in Manila, since January 1, 2017. They intend to return to Canada in Joseph of 2018. As soon as Alex comes, he wants to petition for citizenship. Will Alex be able to petition for naturalization?</span>,
    answers: [
      <span>No, he will not because he does not meet the residency requirements.</span>,
      <span>No, he will not because he has only lived in Canada as a PR for one year.</span>,
      <span>Yes, he will because he meets the residency.</span>,
      <span>Yes, he will because he is in a common-law relationship with a c.c.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph entered Canada on a TRP and was admitted early to be with his wife and children. When his spouse sponsored him, he was declared ineligible due to crime, and the visa post gave his TRP, allowing him to rejoin with his family. A person who has been resident in Canada on a Temporary Resident Permit (TRP) for inadmissibility other than medical inadmissibility may apply for permanent residency after having resided in Canada on a TRP for:</span>,
    answers: [
      <span>180 days.</span>,
      <span>Three years.</span>,
      <span>Five years.</span>,
      <span>Two years.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: After his visa expired, Joseph stayed in Canada for three years. He had been working without a work visa and was discovered by immigration officers during a routine vehicle check by the police, who turned him over to CBSA yesterday. He is being kept in a detention centre for immigrants. When will he get another detention review if he is not freed at his second detention review?</span>,
    answers: [
      <span>After 30 days of being arrested.</span>,
      <span>After 7 days of being arrested.</span>,
      <span>After 15 days of being arrested.</span>,
      <span>After 120 days of being arrested.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph, his wife, and their 11-year-old kid have been illegally living in Canada for the last 10 years. The child is autistic and receives special education at his school, as well as a personal assistant. In addition, he is enrolled in special programmes to aid in his development. Since their arrival, both parents have worked, learned English, and are interested in community service. How would they go about getting a permanent address?</span>,
    answers: [
      <span>They could apply to be considered on humanitarian and compassionate grounds.</span>,
      <span>They cannot obtain permanent residence as the child will cause excessive demand to the health and social systems.</span>,
      <span>They can apply under the Canadian Experience Class as they have at least one year work experience.</span>,
      <span>They cannot apply under any program because they have no status in Canada. They should go home.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph left his home when his country's government was overthrown by a brutal military coup. Joseph arrived at the land border of a neighboring nation after walking for many days through numerous horrific conditions, where he now resides in a camp among hundreds of others who have also left their native countries. Despite the fact that he is no longer in imminent danger, Joseph is unable to return to his house because to the continued violence and instability, and he is concerned about his future beyond the camp's barbed wire gates. Joseph must fulfil all of the following conditions in order to be resettled in Canada under the Refugee Humanitarian Resettlement Program (RHRP), with the exception of:</span>,
    answers: [
      <span>Be selected for financial assistance through the government of Canada or a private sponsor.</span>,
      <span>Be identified by the UNHCR or designated referral organization as a refugee or person in similar circumstances.</span>,
      <span>Not be inadmissible on grounds of causing excessive demand on health or social systems.</span>,
      <span>Not be inadmissible on grounds of security or serious or organized criminality.</span>
    ],
    correct: 1,
    explanation: <span>It is not true that in order to be resettled into Canada under the RHRP Joseph must not be inadmissible on grounds of causing excessive demand on health or social systems. A Convention refugee or person in need of protection is exempt from inadmissibility on the grounds of excessive demand (IRPR, r 139(4)). All other options are true. Joseph must be identified by the UNHCR or designated referral organization as a refugee or person in similar circumstances (reference: IRCC), and Joseph must not be inadmissible on grounds of security or serious or organized criminality (IRPA, s 101 (l)(f)).</span>
  },
  {
    question: <span>Maria, an American citizen, has just one conviction on her record. After shattering the glass of her ex- vehicle, husband's she was convicted of inflicting willful damage under $1,500, a misdemeanor in Texas. Your job is to tell her if a small non-violent criminal offence might render her inadmissible to prosecution under IRPA Article 36(2). (b). An equivalence analysis is required for this. Maria would be judged rehabilitated if she were ruled inadmissible for a single criminal offence under IRPA § 36(2)(b):</span>,
    answers: [
      <span>Ten years after completion of the sentence.</span>,
      <span>Five years after the date of the conviction.</span>,
      <span>Five years after completion of the sentence.</span>,
      <span>Ten years after the date of the conviction.</span>
    ],
    correct: 1,
    explanation: <span>The waiting period for deemed rehabilitation for a single conviction constituting criminality under IRPA s 36(2)(b) is ten years following completion of the sentence, as stated in IRPR r 18(2)(a)(ii). The date of conviction is not the relevant trigger. Five years (also from the sentence completion) refers to the eligibility period for seeking rehabilitation approval for convictions under IRPA s 36, not for deemed rehabilitation.</span>
  },
  {
    question: <span>Test Case: Joseph is a Canadian permanent citizen who married his high school love and applied to sponsor her in Lagos. While he was in Canada visiting his wife, they decided to attempt to acquire her a temporary residence visa (TRV) so she could join him. The TRV was turned down. It took four years for the application to obtain a denial letter. Counsel wrote the visa post around 8 times during that period, asking what was causing the delay, but got no answer. The visa post sought images of the applicant's and sponsor's parents at some time. Counsel demanded an explanation for why they need their parents' photographs. The visa office had not responded. According to the denial letter, the visa post had information from when they filed for her TRV that the pair had similar facial characteristics, and the officer assumed they were siblings attempting to get around the rules. What mistakes were committed throughout the case's processing and decision-making?</span>,
    answers: [
      <span>The clients were not given an opportunity to respond.</span>,
      <span>There was an unreasonable delay that kept the couple separated.</span>,
      <span>The officer relied on someone else's observation to make a decision.</span>,
      <span>All of the above.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria, a 43-year-old General Physician from Greece, want to immigrate to Canada. She need a nomination in order to be considered for PR. Which of the following provinces does not offer a Health Practitioners stream?</span>,
    answers: [
      <span>Manitoba.</span>,
      <span>Nova Scotia.</span>,
      <span>British Columbia.</span>,
      <span>Saskatchewan.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Which of the following is NOT a prerequisite for taking the Canadian Experience Class?</span>,
    answers: [
      <span>Canadian experience gained under proper authorization.</span>,
      <span>A Canadian secondary diploma of one year or an equivalent foreign credential.</span>,
      <span>Language Skills of CLB 7 for NOC 0 an A, and CLB 5 for NOC B.</span>,
      <span>12 months of full-time work experience in Canada.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Joseph was born in India when her mother, a Canadian citizen, was stationed in Dheli working for the Canadian High Commission. The concept of jus sanguinis was used to grant her citizenship. She is now 25 years old, and she travelled to India to study, where she found the guy of her dreams, married him, and had a kid. She intends to bring him as well as the kid to Canada. The youngster grew up to be a very rebellious young man. She relocated to France and had a daughter. Is the child a citizen of Canada?</span>,
    answers: [
      <span>Yes, because her mother is a citizen.</span>,
      <span>Yes, she is because her grand-mother is a citizen.</span>,
      <span>No, Canadian citizenship does not extend to her.</span>,
      <span>No, because the mother is outside Canada.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph was adopted from South Korea when he was two years old in 1980, and he was granted Canadian citizenship by his adoptive parents. Joseph's family lived in South Korea until he was five years old, then moved to Toronto, Ontario, where his adoptive parents adopted his younger sister. Joseph's parents were always honest with him when he had concerns about his upbringing as a youngster, and he has spent much of his life helping with children's advocacy and mentoring organizations. Joseph just returned to Seoul, his native city, and chose to adopt a one-year-old girl called Alex whom he met via an international adoption agency while there. Which of the following statements is correct in this situation?</span>,
    answers: [
      <span>Joseph can apply for a direct grant of citizenship for Alex under the Citizenship Act.</span>,
      <span>Joseph can sponsor Alex for permanent residence under the family class of the IRPA.</span>,
      <span>Joseph can sponsor Alex for permanent residence under the IRPA or apply for a direct grant of citizenship for Alex under the Citizenship Act.</span>,
      <span>Joseph can apply for conditional citizenship for Alex under the Citizenship Act.</span>
    ],
    correct: 2,
    explanation: <span>Since Joseph is a Canadian citizen by grant who was adopted outside Canada the first generation limit applies (Citizenship Act, s 3(3)(a)) and Joseph is not eligible to pass on Canadian citizenship because he was adopted in a foreign country. He can apply to sponsor Alex for permanent residence as his adopted dependent child under the family class and later apply for citizenship once she is residing in Canada and eligible.</span>
  },
  {
    question: <span>Alex is an RCIC who was notified by the CICC that he was in violation of the Client File Management Regulation. Alex is generally thorough in his work, and this is the first time in his six years of practicing that he has made a mistake. In these conditions, what punishment will be imposed on Alex?</span>,
    answers: [
      <span>Suspension of his CICC membership for 30 days.</span>,
      <span>A fine of $100.</span>,
      <span>A written warning with a direction to correct the breach within 30 days.</span>,
      <span>An order to attend specified professional development courses.</span>
    ],
    correct: 3,
    explanation: <span>For a first offence, an RCIC found in breach of the client file management regulation will be subject to a written warning and a direction to correct the breach within 30 days. Reference: Client File Management Regulation, s 12.1.</span>
  },
  {
    question: <span>Joseph is a Canadian citizen who married Marie, a Swedish citizen, in Stockholm while residing there. On April 12, 2018, Joseph sponsored Marie as his spouse, and she came in Ottawa, Ontario, as a permanent residence. Marie realized Joseph was having an affair with Maria, an international student at Carleton University, shortly after arriving in Canada. The couple decided to split right away. On October 2, 2018, Marie moved out of their apartment, and their divorce was formalized a little over a year later. On December 31, 2022, Joseph and Maria became engaged, and Joseph contacted Alex, an RCIC in Ottawa, to inquire about sponsoring Maria as his new spouse when they married. Alex must inform Joseph of the following:</span>,
    answers: [
      <span>He cannot sponsor Maria until after April 12, 2021.</span>,
      <span>He cannot sponsor Maria until Marie leaves Canada.</span>,
      <span>He can sponsor Maria right away as long as he and Maria plan to remain in Canada after she becomes a permanent resident.</span>,
      <span>He can sponsor Maria right away because his divorce from Marie is finalized.</span>
    ],
    correct: 1,
    explanation: <span>Under IRPR r 117(9)(b), a foreign national shall not be considered a member of the family class if they are the sponsor's spouse, and the sponsor has an existing sponsorship undertaking in respect of another spouse. In this case, Joseph's undertaking to support Marie will not expire until April 12, 2021.</span>
  },
  {
    question: <span>Maria is a 29-year-old Colombian immigrant who want to live in Canada. She wants to know whether she satisfies the requirements for at least one of the federal economic immigration programmes that are subject to Express Entry. She gives you an outline of her educational, professional, and financial backgrounds during the first consultation: She graduated from York University in Toronto, Ontario, with a four-year bachelor's degree in civil engineering. While in possession of a NAFTA work visa, she worked as a civil engineer in Canada for one year on a full-time continuous basis in 2017. She then returned to Colombia, where she now works as a stay-at- home mother. • She can communicate in English but not French. She received a CLB 9 in each of the four language skills on the IHTS exam; she has a relative who lives in Vancouver; and she is married to Alex, who will not join her to Canada owing to business obligations. Maria will be accompanied to Canada by her blended family, which includes three healthy children ages 22, 15, and 7. Maria is the legal parent of Alex's two elder children, whom she adopted. •Maria has $5,000 in her bank account in Canada that she may use to satisfy her debts. Which of the following papers would you need from Maria, supposing she gets an invitation to apply for permanent residency from I RCC, and in what format?</span>,
    answers: [
      <span>A photocopy of Maria's educational credential assessment report regarding her civil engineering degree.</span>,
      <span>Maria's original IELTS test result so that you can forward it to the government.</span>,
      <span>Photocopies of Maria's children birth certificates and academic records.</span>,
      <span>Photocopies of employment letters from Maria's previous and current employers.</span>
    ],
    correct: 3,
    explanation: <span>Copies of employment letters from Maria's previous and current employers are required to establish her eligibility under the CEC pursuant IRPR r87.l. You do not require the original IHTS; a photocopy is sufficient to fill out the government forms, which requests: the dates of when the test was taken and when t he results were released, scores, and certificate number. An educational credential assessment report is required for the assessment of foreign credentials, which is not applicable to Maria as she completed her degree in Canada. You do not require academic records of the children, as their academic status is not a requirement to meet dependency under IRPR r 2.</span>
  },
  {
    question: <span>Maria got accepted to Seneca College after completing a two-year diploma. She wants to work full-time in Canada and apply for a work permit via the PGWPP. Maria will be able to do the following:</span>,
    answers: [
      <span>Obtain a work permit for two years to work in any field.</span>,
      <span>Obtain a work permit for one year to work in her field of studies.</span>,
      <span>Obtain an open work permit for three years.</span>,
      <span>Obtain an open work permit for one year.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Alex is a Qatari national who wishes to pursue a four-year BSc in marine biology at Dalhousie University. He hires Maria, an RCIC, to help him apply for a study visa. Maria must tell Alex that he must include all of the following in his application, with the exception of:</span>,
    answers: [
      <span>The results of a medical examination.</span>,
      <span>A letter of acceptance into the BSc program at Dalhousie University.</span>,
      <span>Proof of financial support for the duration of his studies in Canada.</span>,
      <span>The application processing and biometric fees.</span>
    ],
    correct: 3,
    explanation: <span>If the duration of a student visa applicant's studies in Canada is more than one year, the student must show proof of financial support for the first year of studies at the time of their application.</span>
  },
  {
    question: <span>Maria is a 29-year-old Colombian national who wishes to immigrate to Canada. She wants to know whether she satisfies the requirements for at least one of the federal economic immigration programmes that are subject to Express Entry. She gives you an outline of her educational, professional, and financial backgrounds during the first consultation: She graduated from York University in Toronto, Ontario, with a four-year bachelor's degree in civil engineering. While in possession of a NAFTA work visa, she worked as a civil engineer in Canada for one year on a full-time continuous basis in 2017. She then returned to Colombia, where she now works as a stay-at-home mom and speaks English but not French. She received a CLB 9 in each of the four language skills on the IELTS exam. She has a cousin who lives in Vancouver, and she is married to Alex, who will not be joining her in Canada owing to business obligations. Maria will be accompanied to Canada by her blended family, which includes three healthy children ages 22, 15, and 7. Maria is the legal mom of Alex's two older children, and she has $5,000 in her bank account ready for settlement in Canada. In the Express Entry comprehensive rating system, how many points would Maria receive?</span>,
    answers: [
      <span>477.</span>,
      <span>462.</span>,
      <span>414.</span>,
      <span>483.</span>
    ],
    correct: 2,
    explanation: <span>Comprehensive ranking system (CRS) assessment: A. Core / human capital factors; A.1) Age: 110; A.2) Level of education: 120; A.3) Official languages proficiency: 124; A.4) Canadian work experience: 40; B. Spouse or common law partner factors: (N/A); C. Skill transferability factors: C.1) Education with good official language proficiency: 25; C.2) Canadian work experience and a post-secondary degree: 13; C.3) Foreign work experience with good official language proficiency: O; C.4) Foreign work experience with Canadian work experience: 0; D. Additional points; D.1) Post-secondary education in Canada - credential here 1 year or longer: 30; Total: 462.</span>
  },
  {
    question: <span>You're working on a TRP application for Joseph, an Irish musician, to submit to the London High Commission. Three years ago, he was convicted of break-and-entry. Joseph is 56 years old and the main vocalist of the Irish Blessings, a worldwide musical success with a six-piece band. Joseph has no prior convictions or immigration infractions on his record. The performance, which will take place in six weeks at Massey Hall in Toronto, is already sold out. The officer has discretion under IRPA section 24 to award a TRP to an inadmissible individual to enable them to enter Canada. The police is not allowed to limit their discretion. In this scenario, a lack of judgement would be most obvious if:</span>,
    answers: [
      <span>The officer relied on an irrelevant factor, namely her own view of Irish music.</span>,
      <span>The officer relied on the wrong section of the IRPA.</span>,
      <span>The officer ignored evidence.</span>,
      <span>The officer considered the seriousness of Joseph's criminal record only, to the exclusion of all other factors raised by him.</span>
    ],
    correct: 4,
    explanation: <span>In discretionary decision-making, as required under IRPA s 24 (TRPs) and IRPA s 25(H&C) in particular, the legislation purposefully gives officers extremely broad scope to consider all factors that justify exercising their discretion in a certain way. In doing so, they cannot limit their consideration, thus fetter their discretion, by focusing on a single factor as paramount, and refuse to look at other factors which the applicant raised. As all factors may be put forth by the applicant, the officer must consider and weigh them but cannot just ignore them, as that defeats the purpose of IRPA s 24. The other answers demonstrate different types of legal errors for which the decision could also be overturned on judicial review.</span>
  },
  {
    question: <span>Joseph was in Canada on a work visa that was only valid for a few months. He committed an offence for which he might have gotten up to ten years in prison under the Criminal Code in September 2014. He was simply sentenced to home detention and fined, which he promptly paid following his release. He went back to his homeland. Maria, a Canadian, met him while on vacation. They are in love, and she wants to marry him and sponsor him to immigrate to Canada. What should he do about his conviction?</span>,
    answers: [
      <span>Apply for a record suspension to be considered admissible.</span>,
      <span>Wait five years from the date of the offence to be considered as rehabilitated.</span>,
      <span>Nothing because he served his time and paid a fine and the offence was a single conviction.</span>,
      <span>Apply for rehabilitation 5 years from the date he paid the fine.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>After coming out as a transgender woman on her 35th birthday, Maria divorced her husband, Joseph. The couple did not divorce despite living separately and apart for eight years, and they have maintained a friendly relationship as co-parents to their 13-year-old daughter, Maria. Maria moved to Canada three years ago to work as a creative director for a prominent advertising firm, and she and her girlfriend, Joseph, have been living in Toronto for the last two years. Since Maria and Joseph are still legally married, Joseph offers that they sponsor Joseph and Maria for permanent residency after witnessing how much Maria misses having her daughter near by. Which of the following statements is correct in this situation?</span>,
    answers: [
      <span>Maria cannot sponsor Joseph under the family class.</span>,
      <span>Joseph and Maria can be sponsored under the family class.</span>,
      <span>Maria can apply to sponsor Joseph and Maria on humanitarian and compassionate grounds.</span>,
      <span>Maria can apply to sponsor Maria and Joseph because Joseph consents.</span>
    ],
    correct: 1,
    explanation: <span>Maria cannot sponsor Joseph as her spouse because they have been living separately and apart for more than one year, and Maria is currently the common law partner of another person. See IRPR r 117(9)(c)(ii) (A).</span>
  },
  {
    question: <span>Joseph was in Canada on a student visa. He had been living in Canada for three years when he fell in love with Maria, a Canadian citizen with whom he had a 14-month common-law relationship. He halted his studies and immediately started working full-time without obtaining a work permit. He applied to renew his study visa and, in order to demonstrate compliance, he presented forged paperwork. He was charged with deception and served with an order of exclusion. His application was denied, and he was expelled from Canada. His common-law spouse immediately submitted an application to sponsor him. What other applications should Joseph pursue?</span>,
    answers: [
      <span>He has to make an application for a Record suspension.</span>,
      <span>He has to make an application for Rehabilitation.</span>,
      <span>He has to make an application for Authorization to Return to Canada.</span>,
      <span>He has to make a new application for a work and study permit.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>The situation below is followed by five questions. Test Case: Joseph has been an RCIC for less than a year and has solely worked on files pertaining to study permits. He just signed a new customer who want to immigrate to Canada as a self-employed businessman. He wants Joseph to apply for permanent residency and urges that Joseph overstate his employment experience to boost his application. He also informs Joseph about his out-of-wedlock daughter, whom he does not want to disclose since his wife is unaware of the kid. Joseph informs the client that he must notify the client's wife and IRCC of the information, since the client did not mention the kid on his TRV application. Joseph owes the customer a responsibility of competence. What is he need to do?</span>,
    answers: [
      <span>Interview the client's wife to see if she qualifies.</span>,
      <span>Fill in the required forms and pay the immigration processing fee on behalf of the client.</span>,
      <span>Inform the client he is not experienced in this type of file.</span>,
      <span>Suggest he makes a refugee claim.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph is a US citizen with a Ph.D. in economics from Stanford University in California and is a well-known microeconomics and income disparity writer, researcher, and scholar. He has been asked to be a visiting lecturer at York University in Ontario for the forthcoming academic year, and many undergraduate and graduate students are looking forward to attending his lecture series. Joseph must complete the following tasks before going to Canada to teach:</span>,
    answers: [
      <span>Obtain an LMIA from ESDC.</span>,
      <span>Obtain a work permit.</span>,
      <span>Joseph is exempted from needing to obtain a work permit or an LMIA from ESDC in this circumstances.</span>,
      <span>Obtain a work permit and an LMIA from ESDC.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is a 46-year-old Italian citizen with an excellent command of the English language. During her most recent visit to Canada, she took the CELPIP and received an 8 in listening, a 9 in reading, a 7 in speaking, and a 7 in writing. She graduated with a bachelor's degree in business administration. She has a web design firm that has been in operation for the last seven years. She wants to come to Canada to study. Maria went to the visa interview and informed the officer that she was applying via Saskatchewan, but she preferred Montreal since it was more European and she knew people there. What may the interview's outcome be?</span>,
    answers: [
      <span>Approved as she was selected by Saskatchewan.</span>,
      <span>The officer could refuse the application.</span>,
      <span>The officer could give her a conditional visa.</span>,
      <span>The application could be sent for investigation.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria, who came to Canada as a refugee, will sponsor her Bulgarian parents. She sponsored her husband and his two children last year, and eleven years ago, she sponsored her grandparents' immigration to Canada. She is quite worried about fulfilling the Llco standards and would want to know how many individuals she needs to calculate for her LICO.</span>,
    answers: [
      <span>6 people.</span>,
      <span>7 people.</span>,
      <span>4 people.</span>,
      <span>8 people.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Under the Federal Skilled Worker point system, what is the maximum number of points you may obtain for the second official language?</span>,
    answers: [
      <span>4.</span>,
      <span>0.</span>,
      <span>6.</span>,
      <span>8.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Prior to submitting for nomination in the Critical Workers stream of the PEI PNP, the applicant must have worked on a work permit for the firm that is providing him with the employment for a certain period of time. How long must a candidate work for the firm before being considered for nomination?</span>,
    answers: [
      <span>9 months.</span>,
      <span>6 months.</span>,
      <span>1 year.</span>,
      <span>0 months.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case update: Maria is appointed to represent Maria in a humanitarian application, which has recently been filed. Maria cautions Maria that Joseph did not physically beat her and that she gave the police false information. Maria is taken aback, and her faith in her client is shattered. Maria is informed of this, but Maria is instructed to continue with the humanitarian application. Is it possible for Maria to drop out of the case?</span>,
    answers: [
      <span>Yes, because her trust in the client is broken.</span>,
      <span>No, because the file is already submitted.</span>,
      <span>Yes, because the client has lied to her.</span>,
      <span>No, because it will prejudice the client and their file.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph is employed as an RCIC. In a Mississauga immigration consulting business with six other RCICs. The partners decide to transfer the company to a bigger office in downtown Mississauga since the firm's business is continually increasing. Joseph adds that he has a big number of unopened files that are over six years old that he wishes to get rid of as part of his transfer preparations. Joseph must do the following before eliminating these closed files:</span>,
    answers: [
      <span>Inform his former clients in writing that their file is being destroyed.</span>,
      <span>Maintain a record of all the destroyed files.</span>,
      <span>Inform the CICC of the files being destroyed, and outline the manner of disposal.</span>,
      <span>Maintain a full electronic backup of all the destroyed files.</span>
    ],
    correct: 2,
    explanation: <span>Under Client file Management Regulation article 10.l, an RClC shall maintain a record of destroyed files, and record at a minimum: ·The client's full name and address; ·A brief description of the service provided; ·The file closing date; ·The actual file destruction date.</span>
  },
  {
    question: <span>Except in the following respects, a refugee claimant seeking resettlement in Canada differs from a permanent residence applicant:</span>,
    answers: [
      <span>A refugee claimant is not subject to the same selection criteria as a PR applicant.</span>,
      <span>A PR applicant chooses to resettle in Canada with each refugee claimant is forced to nee.</span>,
      <span>A refugee claimant is exempt from the medical examination requirement, while a PR applicant is not.</span>,
      <span>A refugee claimant is not subject to the same financial requirements as a PR applicant.</span>
    ],
    correct: 3,
    explanation: <span>Refugee claimants are also subject to the requirement of undergoing a medical examination (IRPR, s 30(l)(a)(v)), but may be exempt from medical inadmissibility on the grounds of excessive demand (IRPR, r 139(4)).</span>
  },
  {
    question: <span>Joseph has been an RCIC for less than a year and has worked exclusively on study permit application files. He just signed a new customer who want to immigrate to Canada as a self-employed businessman. He wants Joseph to apply for permanent residency and urges that Joseph overstate his employment experience to boost his application. He also informs Joseph about his out-of-wedlock daughter, whom he does not want to disclose since his wife is unaware of the kid. Joseph informs the client that he must notify the client's wife and IRCC of the information, since the client did not mention the kid on his TRV application. The customer want to settle in Quebec. What does Joseph need in order for this to occur?</span>,
    answers: [
      <span>Be Registered with Register Québecois des Consultants en Immigration.</span>,
      <span>More experience in self-employed files.</span>,
      <span>To be able to speak French to the client.</span>,
      <span>To help prepare the application but submit it without showing any representative.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Mike Jordan is a basketball player who earned a gold medal at the 1992 Olympics with the Dream Team. He was the Indiana Pacers' coach until 2000, and then the team's president until 2017. He is dissatisfied with the current administration in the United States and wants to immigrate to Canada as a self-employed person. Does Mike Jordan fit the self-employed category's requirements?</span>,
    answers: [
      <span>Yes, because he won the Gold medal in the Olympics in 1992.</span>,
      <span>Yes, because he is an athlete who is world renown.</span>,
      <span>No, because he does not meet the requirements of the regulations.</span>,
      <span>No, because he should make a refugee claim.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph hires Alex to help him with his application for permanent residency under the start-up visa programme after meeting with RCICs. He signs a retainer agreement with Alex and pays him a $5,000 check as an initial payment for future services on October 11, 2022. Alex must deposit Joseph's check into his client account by the following deadlines:</span>,
    answers: [
      <span>October 25, 2022.</span>,
      <span>October 18, 2022.</span>,
      <span>Within 48 hours.</span>,
      <span>November 10, 2022.</span>
    ],
    correct: 3,
    explanation: <span>An RCIC who receives money to be held on behalf of a client for future services shall deposit the money into their client account within 14 calendar days (see: Client Account Regulation, s 4.1).</span>
  },
  {
    question: <span>Alex, a 48-year-old Canadian citizen, met Joseph in Morocco while on vacation. She fell in love with him right away, and the pair married in Marrakesh following a whirlwind three-week relationship. Alex registered to sponsor Joseph as soon as she returned home, and he came in Canada as a permanent citizen on February 22, 2022. Their relationship, however, has lately grown rough, and Joseph is contemplating moving out while they attend couple's therapy. He is concerned that he will not be able to do so since his Confirmation of Permanent Residence states that he must live with Alex for two years after becoming a permanent resident. Which of the following statements is correct in this situation?</span>,
    answers: [
      <span>Joseph can apply for Canadian citizenship to avoid breaching this condition.</span>,
      <span>Alan's permanent resident status is conditional on him cohabiting with Alex until February 22, 2021.</span>,
      <span>Alan's permanent resident status is conditional on him physically residing in Canada until February 22, 2021.</span>,
      <span>Alex is responsible for financially supporting Joseph until February 22, 2022.</span>
    ],
    correct: 4,
    explanation: <span>On April 28, 2017, the federal government announced that it had repealed division 8 of part 5 of the IRPR in its entirety, thus removing the requirement for sponsored spouses to live with their sponsors in order to keep their permanent residence status. Reference: IRCC. Joseph may live apart from Alex without risking his permanent residence status, despite the condition on his Confirmation of Permanent Residence. However, he may not apply for citizenship until he has spent 1,095 days in Canada, so he is not yet eligible. The correct answer is that regardless of their relationship status, Alex is responsible for financially supporting Joseph until three years from the date that Joseph became a permanent resident.</span>
  },
  {
    question: <span>Each of the following conditions might cause an officer at a port of entry to refuse admission to a foreign person holding a temporary residence visa, except:</span>,
    answers: [
      <span>The applicant has not yet made arrangements to exit Canada at the end of their stay.</span>,
      <span>The applicant has not shown sufficient funds or means of support for the length of their stay.</span>,
      <span>The applicant has also made a permanent residence application under a PNP.</span>,
      <span>An officer cannot deny entry to a person with a valid temporary resident visa.</span>
    ],
    correct: 3,
    explanation: <span>A temporary resident visa (TRV) allows a person to travel to a Canadian port of entry, but does not guarantee admission. An officer may deny entry to a person with a valid TRV. However, under IRPA s 22(2), an intent to become a permanent resident does not preclude a person from becoming a temporary resident if the officer is satisfied that the person will leave Canada by the end of their authorized stay.</span>
  },
  {
    question: <span>Maria has been a permanent resident of Canada for the last five years and is now pursuing Canadian citizenship. Maria failed her first try at the citizenship exam, and she just learned that she failed her second attempt this week. Maria's response in this situation is as follows:</span>,
    answers: [
      <span>Is barred from applying for citizenship for one year.</span>,
      <span>Is permanently barred from applying for citizenship.</span>,
      <span>Must attend a hearing with a citizenship officer.</span>,
      <span>Can attempt the citizenship test one final time.</span>
    ],
    correct: 3,
    explanation: <span>If an applicant for Canadian citizenship does not pass their second attempt at the citizenship test, they will receive notice to appear for a hearing with a citizenship officer. The officer will conduct an oral interview to assess whether the applicant meets all the requirements for citizenship. Reference: IRCC.</span>
  },
  {
    question: <span>Alex, Maria, Joseph, Alex, and Alex are partners in a search engine optimization software firm in the United Kingdom (SEO). The following is a list of who has voting shares in the company: Alex has a 25% chance; Maria has a 30% chance; Joseph has a 25% chance; Alex has a 15% chance; and Alex has a 5% chance. The five partners want to develop their firm and want to apply for a start-up visa in Canada. They are ecstatic to receive an offer from an Ottawa-based angel investor who would spend $150,000 in return for a 50% stake in their firm. The partners hire Joseph, a London-based RCIC, to ensure that they all fulfil the educational, linguistic, and settlement fund criteria. Is Joseph able to inform the partners that they qualify for a start-up visa?</span>,
    answers: [
      <span>No, because the investment amount from the angel investor is not enough.</span>,
      <span>Yes, they meet the requirements for the program.</span>,
      <span>No, because there are too many owners for the business to qualify.</span>,
      <span>No, because they do not meet the ownership obligations of the program.</span>
    ],
    correct: 4,
    explanation: <span>Each applicant must hold at least 10 percent of the voting rights attached to all shares of the corporation. Since one of the applicants does not meet the requirements, the entire application will be rejected. Reference: Start-Up Visa eligibility- business ownership requirements.</span>
  },
  {
    question: <span>Maria applied for a study visa on her own behalf, seeking to leave Colombia to study in Canada. She got a letter three weeks ago denying her study visa application due to a lack of evidence that she had the requisite cash to study. Her denial letter gave no specific grounds for her refusal, simply that the officer was unsatisfied with the money. Her evidence revealed that her Canadian partner, who was paying for her education, earned $50,000 per year, and had $20,000 in savings. Maria feels the ruling is unjust and intends to appeal it. Maria's study permit application will be decided on the merits by the visa officer. In general, this means:</span>,
    answers: [
      <span>The officer may override a specific section of the Regulations under IRPA if, in their discretion, the Regulation is unfair to the applicant.</span>,
      <span>The officer may override a specific section of the Act (IRPA) if, in their discretion, the provision is unfair to the applicant.</span>,
      <span>The officer may override a specific section of the IRCC policies such as Program Delivery Instructions if, in their discretion, the policy is unfair to the applicant.</span>,
      <span>The officer must apply all provisions of the Act, the Regulations, and IRCC policies regardless, but may apply discretion in matters not covered by these.</span>
    ],
    correct: 4,
    explanation: <span>The Act and Regulations are the only legally authoritative sources of law, binding on officers. Policies are developed by IRCC officials to provide guidelines to promote consistency and fairness in decision-making by officers generally, but can be overridden by an officer in an appropriate case, unlike the Act and Regulations. This basic principle in constitutional and administrative law was recently re-affirmed by the Supreme Court of Canada in the immigration context, holding that the policies of IRCC for inland humanitarian and compassion (H&C) cases provided reference guidelines for officers, but they were not law. Thus, they need not be followed in every case, as must the Act and Regulations. Reference: Kanthasamy v Canada (Citizenship and Immigration), 201s sec 61.</span>
  },
  {
    question: <span>Test Case: Joseph was on a study permit in Canada. He had been in Canada for three years when he fell in love with Maria, a Canadian citizen with whom he had been in a 14-month common-law relationship. He dropped out of school and went to work full-time without a work permit. He applied to renew his study visa, and to demonstrate compliance, he presented forged documentation. He was charged with deception and was placed on probation. Question: What would be the primary basis for the above-mentioned application?</span>,
    answers: [
      <span>It would be on the ground that he was established in Canada.</span>,
      <span>It would be on the ground that he lived in Canada for three years.</span>,
      <span>It would be on the ground of his reuniting with his common-law partner.</span>,
      <span>It would be on the basis that his misrepresentation was not serious.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria has been working illegally in Canada. She was just promoted to supervisor and was compensated with an increase in pay. One of her employees, who was aware of her immigrant status, got enraged, believing she should have been granted the promotion instead. Maria was detained by the CBSA and is now undergoing her first detention review. Which of the following constitutes a reason for the detention of a foreign individual under the Immigration and Refugee Protection Regulations?</span>,
    answers: [
      <span>The foreign nation has no money and no resources to survive on his or her own.</span>,
      <span>The foreign national is under an enforceable removal order.</span>,
      <span>The Minister is not satisfied of the identity of the foreign national.</span>,
      <span>All of the above.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Which of the following people is not eligible for an open work permit:</span>,
    answers: [
      <span>Spouse or common law partner of a Canadian, residing abroad and sponsored as a member of family class.</span>,
      <span>Spouses or common law partners (work permit holders) who have been nominated for permanent residence by a province or territory, skill level of the principal applicant's occupation being C or D.</span>,
      <span>Spouses or common law partners of foreign representatives and family members of military personnel.</span>,
      <span>Spouses or common law partners of foreign students at public: post- secondary schools.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>To visit Canada as a tourist, a foreign person from which of the following nations would need to apply for a temporary residence visa?</span>,
    answers: [
      <span>Solomon Islands.</span>,
      <span>Malta.</span>,
      <span>Bermuda.</span>,
      <span>The People's Republic of China.</span>
    ],
    correct: 4,
    explanation: <span>IRPR r 190(1): The People's Republic of China is not a visa-exempt country.</span>
  },
  {
    question: <span>Test Case: After his visa expired, Joseph stayed in Canada for three years. He had been working without a work visa and was discovered by immigration officers during a routine vehicle check by the police, who turned him over to CBSA yesterday. He is being kept in a detention centre for immigrants. When should you submit the documentation proof that you'll use during the detention review?</span>,
    answers: [
      <span>20 days before the hearing or as soon as practicable to do so.</span>,
      <span>10 days before the hearing or as soon as practicable to do so.</span>,
      <span>8 days before the hearing or as soon as practicable to do so.</span>,
      <span>5 days before the hearing or as soon as practicable to do so.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is an Italian citizen, 46 years old, and possesses an excellent command of the English language. During her most recent visit to Canada, she took the CELPIP and earned an 8 in listening, a 9 in reading, a 7 in speaking, and a 7 in writing. She graduated with a bachelor's degree in business administration. She is the proprietor of a web design firm that has been in operation for seven years. She wants to study in Canada. Question: Maria met and began dating Joseph, a 32-year-old Canadian citizen. He like older ladies. He offered marriage to her and expressed an interest in sponsoring her relocation to Ontario. Maria accepted the proposal and immediately started planning the wedding. Maria met Joseph's family and was advised by one of his sisters to exercise caution around Joseph due to his prior conviction for abusing his former husband. Is this new knowledge cause for fear for Maria?</span>,
    answers: [
      <span>She should not be concerned as the sister may not be telling the truth.</span>,
      <span>She should not be concerned he was ever violent with her.</span>,
      <span>She should be concerned as it could affect her sponsorship application.</span>,
      <span>Should be concerned as he might use older women to get their assets.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is a 46-year-old Italian citizen with an excellent command of the English language. During her most recent visit to Canada, she took the CELPIP and received an 8 in listening, a 9 in reading, a 7 in speaking, and a 7 in writing. She graduated with a bachelor's degree in business administration. She has a web design firm that has been in operation for the last seven years. She wants to come to Canada to study. Maria has chosen not to marry Joseph and instead wants to get a work visa in order to establish a subsidiary of her Italian company in Ontario. She has a large sum of money to invest in Ontario, has already identified a site, and is in the process of working with an accountant to draught her business plan. What category may she apply for a work visa under?</span>,
    answers: [
      <span>She can obtain a work permit as an entrepreneur.</span>,
      <span>She can obtain a work permit as an intracompany transferee.</span>,
      <span>She cannot obtain a work permit.</span>,
      <span>She has to find a job offer and the employer has to get an LMIA.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph is a Permanent Resident who arrived in Canada under the Ontario Investor Program. He had just moved into a semidetached house and was experiencing issues with his next-door neighbor. Joseph and his neighbor had a falling out, and Joseph was found guilty of aggravated assault against his neighbor in Toronto. He was sentenced to twenty-five months in prison. As a consequence of this conviction, you will be able to:</span>,
    answers: [
      <span>Joseph is inadmissible to Canada and eligible to appeal to the IAD.</span>,
      <span>Joseph is inadmissible to Canada and ineligible to appeal to the IAD.</span>,
      <span>Joseph is a permanent resident and therefore his conviction is irrelevant.</span>,
      <span>Joseph is inadmissible to Canada and can apply for rehabilitation.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>If a candidate is nominated via a Provincial Nominee Program, how many points will they earn in the Express Entry Comprehensive Ranking System (CRS)?</span>,
    answers: [
      <span>600.</span>,
      <span>100.</span>,
      <span>50.</span>,
      <span>200.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Mr. Alex applied for and received a TRV at the Canadian consulate in his home country. On March 1, 2025, his TRV will expire. On July 15, 2016, he arrived at Vancouver International Airport and was admitted for a six- month stay. On February 14, 2021, he will visit your workplace. He want to extend his stay in Canada so that he may spend more time with his ailing mother. Mr. Alex, what advice would you give him?</span>,
    answers: [
      <span>He must apply for restoration within 90 days of the expiry of his visitor status.</span>,
      <span>He must leave Canada as soon as possible and apply for from his county of nationality.</span>,
      <span>He only needs to apply for the visitor record right away.</span>,
      <span>He must apply for a new TRV at the Canadian visa office in his country of nationality because he has over stayed.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>A foreign individual from a Designated Country of Origin (DCO) who has filed a refugee claim or a notification for judicial review of an IRB denial and desires to file a humanitarian and compassionate application.</span>,
    answers: [
      <span>Cannot submit an H&C application if 36 months have not passed since the refusal of the refugee case.</span>,
      <span>Is required to withdraw the other processes as a condition of an H&C application.</span>,
      <span>Is not allowed to submit an H&C application if 12 months have not passed since the refusal of the refugee case.</span>,
      <span>Must submit a signed withdrawal before the department will grant permanent residence.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>There are four questions that follow the scenario. Test Case: The Toronto Raptors just traded Joseph to the San Antonio Spurs for Joseph, a basketball player. Many times, Joseph came to play against the Raptors. When he arrived to play against the Raptors, what papers did he require?</span>,
    answers: [
      <span>He required an open work permit.</span>,
      <span>He required a work permit with an LMIA.</span>,
      <span>He required visitor status.</span>,
      <span>He required a temporary resident permit.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph's area is home to a burgeoning Syrian-Canadian community, and he wants to learn more about how he can help other families seeking refuge in Canada. Joseph and four of his pals decided to apply as a group to sponsor a refugee (GS). Each of the following statements is correct under given circumstances, with the exception of:</span>,
    answers: [
      <span>The group must enter into a sponsorship agreement with the minister.</span>,
      <span>Each member of the group must live in the community where the refugee is expected to settle.</span>,
      <span>The group must provide a settlement plan outlining their commitment to providing basic financial support and care for the sponsored refugee.</span>,
      <span>The group must enter into an undertaking with the minister to provide settlement assistance and support for the refugee for the length of the sponsorship.</span>
    ],
    correct: 1,
    explanation: <span>In contrast to a group of five (composed of five private individual sponsors), sponsorship agreement holders are established, incorporated organizations that enter into an agreement with the minister to facilitate refugee sponsorship. The remaining options are true. Each group member must live in the community where the refugee is expected to settle, the group must provide a settlement plan, and the group must enter into an undertaking with the minister to provide settlement assistance and support. References: IRCC, IRPR r 153(2).</span>
  },
  {
    question: <span>Maria had her initial free 30-minute consultation with Maria, an RCIC. Maria comes to Maria's office this week to sign a retainer agreement and present Maria with a $1,000 check for future services. Maria must do all of the following tasks after getting the check, with the exception of:</span>,
    answers: [
      <span>Maintain a client account for Maria that is separate from her other client accounts.</span>,
      <span>Deposit the funds into her client account within 14 days.</span>,
      <span>Only withdraw these funds for payment of fees after she has issued an invoice to Maria.</span>,
      <span>Reconcile all client accounts within 90 days of each month's end.</span>
    ],
    correct: 1,
    explanation: <span>An RCIC does not need to maintain a separate client account for each client unless the client specifically requests it.</span>
  },
  {
    question: <span>Josepha and Joseph wish to marry, and Joseph, a Canadian citizen, wants to apply for sponsorship on her behalf. They have lived together for little over a year, so they have documentation of their connection. Her 16th birthday was celebrated at their new apartment, and they have photos of the party Joseph threw for her. Joseph is a student with a part-time job. Is it possible for Joseph to sponsor Josepha as his common-law wife?</span>,
    answers: [
      <span>Yes, because they have proof of their relationship.</span>,
      <span>Yes, because they have been residing together for 12 months.</span>,
      <span>No, because she does not meet the requirements.</span>,
      <span>No, because he does not meet the LICO requirements.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria is a Canadian student who just finished her Master's Degree in Education. She has requested that you do an evaluation in the skilled worker category for her. Her sole professional experience is as an English teacher at a high school (NOC 4141). In 2014, 2015, and 2016, she worked full-time as a high school English teacher from the beginning of May until the end of August. She also possesses a Post-graduate work visa and has worked full- time from June 2018 till now. How many points would she get for her previous work experience?</span>,
    answers: [
      <span>17, as she has complete more than one year of full time experience.</span>,
      <span>15, as she has a cumulative total of 19 months of full time experience.</span>,
      <span>Zero points, as you cannot count experience accumulated while a full time student.</span>,
      <span>Zero points, as she has not completed one-year continuous full time work experience.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Alex chooses to launch his own business in Hamilton, Ontario, after five years of working at an immigration consulting company with many other RCICs. He is examining the CICC client file management and account rules as he prepares to establish his office to verify that his procedures are compliant with professional standards. On a retainer agreement, Alex may take any of the following methods of payment from a customer except:</span>,
    answers: [
      <span>A nat fee.</span>,
      <span>Hourly fees.</span>,
      <span>Contingency fees.</span>,
      <span>Administrative fees.</span>
    ],
    correct: 3,
    explanation: <span>Contingency billing is not permitted as a billing method for a client (CICC Retainer Agreement Regulation, s 9.3).</span>
  },
  {
    question: <span>Test Case: Maria is a 45-year-old Colombian computer engineer with a NOC skill level of A. She has a WES- accredited Your Answer 8 master's degree and has taken the IELTS and earned the best score in all of the abilities examined. She has been working in her profession for the last 8 years, and she has completed a significant number of her profession's primary chores as well as noc duties. Her brother is a Canadian citizen who lives in Canada. In the Federal Skilled Worker Category, she obtains 69 points, while in Express Entry, she receives 386 points. The most recent CRS score was 441. Maria is desperate to see her brother in Canada and will go to any length to gain permanent residency. Maria has chosen that rather than working in Canada, she would want to enroll for a two-year PHD programme at the University of Toronto. Will she have a fair chance of obtaining the CRS if she studies for two years without working?</span>,
    answers: [
      <span>Yes, she could apply for nomination under the Ontario PhD stream.</span>,
      <span>Yes, she will get 150 points for education.</span>,
      <span>No, because she loses all points for age.</span>,
      <span>No, because she needs to work in Canada.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Joseph has only worked on study permit application files for less than a year as an RCIC. He just took on a new customer who want to immigrate to Canada as a self-employed businessman. He wants Joseph to apply for permanent residency and urges that Joseph inflate his employment history, believing that this would aid his application. He also informs Joseph that he has an unmarried daughter whom he does not like to mention since his wife is unaware of the kid. Because the customer did not declare the kid in his TRV application, Joseph informs the client that he must notify the client's wife and IRCC. Question 2: When is Joseph permitted to reveal sensitive information from this client's file?</span>,
    answers: [
      <span>When he is at a party.</span>,
      <span>When the client gives permission.</span>,
      <span>When discussing the case with a colleague.</span>,
      <span>When the file is finished.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph was asked to be best man at a friend's wedding in Canada, which would take place in three months. Joseph is overjoyed, and he arranges to meet with Alex, an RCIC in Sao Joseph, Brazil, to help him secure a temporary residence visa. Joseph informs Alex during their first encounter that he was convicted of drunk driving seven years ago in Rio de Janeiro, but that he had paid the fine and completed one year of probation. Since then, he has not been in difficulty with the law. What would Alex tell Joseph based on this information?</span>,
    answers: [
      <span>Joseph must make an application to e minister for individual rehabilitation.</span>,
      <span>Joseph will receive a temporary resident visa because he will be deemed rehabilitated for his criminal record.</span>,
      <span>Joseph is inadmissible and will not be eligible to apply for rehabilitation until ten years have passed from the date his probation ended.</span>,
      <span>Joseph is inadmissible and can only seek special permission from the minister to enter Canada on a temporary resident permit.</span>
    ],
    correct: 2,
    explanation: <span>Joseph could be inadmissible on the basis of serious criminality because he committed an offence that is the equivalent of an indictable or hybrid offence in Canada. However, he can apply to the minister for individual rehabilitate ion after five years have elapsed from the completion of his sentence, which is the case here (IRPA, s 36(3)(c); IRPR, r 17).</span>
  },
  {
    question: <span>Joseph is the owner of a construction firm in Manitoba. He now employs five foreign nationals in different capacities. Joseph has been reported to Employment and Social Development Canada (ESDC) by one of his employees, Joseph, who claims that his compensation is less than what is indicated in his contract. ESDC will undertake an inspection as a consequence of this accusation. Joseph believes that such scrutiny is unjustified since he has been kind with Joseph. Which of the following repercussions may Joseph face if ESDC finds him non-compliant as a result of the inspection?</span>,
    answers: [
      <span>An administrative monetary penalty ranging from $5,000 to $200,000 per violation, up to a maximum of $2 million over one year.</span>,
      <span>A ban for eight years.</span>,
      <span>The publication of his name and address on the CBSA public website with the details of the violation.</span>,
      <span>The revocation or suspension of previously-issued LMIAs.</span>
    ],
    correct: 4,
    explanation: <span>The revocation or suspension of previously issued LMIAs is a possible consequence. A ban for eight years could not be imposed; a ban of one, two, five or ten years, or a permanent ban could be imposed, but there is no provision for a ban of eight years. The administrative monetary penalties range from $500 to $100,000 per violation, up to a maximum of $1 million over one year. His name and address as well as the details of the violation would be published on the IRCC's public website, and not on the CBSA's public website. Reference: ESDC.</span>
  },
  {
    question: <span>Maria is a Filipino nurse who has been working at St Joseph geriatric care facility in Toronto for the last four months and has gotten a work visa based on an LMIA from her employer. She enjoys her work and has formed positive relationships with her coworkers and patients at the facility. Unfortunately, she was laid off unexpectedly last week, but fortunately for Maria, she received a new job offer from another geriatric centre, South Shore Care Center. Initially concerned that she would be deported, Maria spoke with a friend in a similar situation, who told her that she could stay as long as she had another job. Maria walks into your office and asks whether she needs a new LM IA, a new contract, and if she would be required to pay any fees. What advice would you give?</span>,
    answers: [
      <span>Yes, she will only have to pay $155 for the new work permit.</span>,
      <span>Yes, she needs a new contract, and will have to pay $155 for the new work permit.</span>,
      <span>Yes, she needs a new LMIA, contract, and will have to pay $155 for the new work permit.</span>,
      <span>Yes, she needs a new LMIA, and will have to pay $155 for the new work permit.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>The Immigration and Refugee Protection Act makes it mandatory to consider the best interests of a child who is directly impacted by a decision made under section 25. (1). This implies that when an officer investigates a foreign national's circumstances under this provision, the officer must:</span>,
    answers: [
      <span>Must give a positive decision when there are children born in Canada or abroad.</span>,
      <span>Must give a positive decision when a foreign national has children born in Canada.</span>,
      <span>Must evaluate the best interest of any children who were born on Canadian soil.</span>,
      <span>Must evaluate the best interest of any children whether born in Canada or abroad.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria arrived in Canada on a Study Permit. She applied for a study permit extension two weeks before the document was about to expire. She has been waiting for a decision for five weeks after submitting her application. She's worried about her situation. Is Maria permitted to finish her studies?</span>,
    answers: [
      <span>Maria is not allowed to study until she receives her extension.</span>,
      <span>Maria is allowed to study for up to 90 days after the permit expires.</span>,
      <span>She is allowed to continue studying until she receives a decision on her application.</span>,
      <span>She is not allowed to study and will have to apply for restoration of her status.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>The situation below is followed by five questions. Test Case: After his visa expired, Joseph had been in Canada for three years. He had been working without a work visa and was discovered by immigration officers during a routine vehicle check by the police, who turned him over to CBSA yesterday. He is being kept in a detention centre for immigrants. When will Joseph be able to talk about his release from imprisonment for the first time?</span>,
    answers: [
      <span>He will have a detention review within 6 months of being detained.</span>,
      <span>He will have a detention review within 14 days of being detained.</span>,
      <span>He will be able to discuss release with the arresting officer.</span>,
      <span>He will be have a detention review within 48 hours of his detention.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>As a Federal Skilled Worker, Joseph arrived in Calgary, Alberta, in 2015 as a permanent resident under the Express Entry programme. Alex returned to his hometown of Binmingham, England, in December 2016 to spend the holidays with his friends and family. He was charged with public drunkenness, which is the equivalent of a summary conviction crime in Canada, after a wild night out with his cousin and high school friends. On December 19, 2016, he pled guilty. In these conditions, you should:</span>,
    answers: [
      <span>Joseph can immediately return to Canada because the criminality provisions do not apply to him.</span>,
      <span>Joseph is inadmissible, cannot return to Canada, and cannot apply for individual rehabilitation until December 19, 2021.</span>,
      <span>Joseph is inadmissible and cannot return to Canada until December 19, 2021, when he will be deemed rehabilitated.</span>,
      <span>Joseph can immediately return to Canada, but will be referred to the Immigration Division to attend an admissibility hearing.</span>
    ],
    correct: 2,
    explanation: <span>Joseph pled guilty to public drunkenness. However, Joseph will not be found inadmissible on the grounds of criminality because the o offence is equivalent to a summary conviction offence in Canada (Criminal Code, s l75(l)(a)(I I)), and because the criminality provisions apply only to foreign nationals (lRPA, s 36(2)).</span>
  },
  {
    question: <span>Terence was born in Vancouver, British Columbia, but when he was eight years old, his family relocated to Portland, Oregon. He married an American citizen named Maria, and their son, Joseph, is a dual American- Canadian citizen who received Canadian citizenship via his father. Joseph married Maria, a US citizen, in 2013, and the pair just welcomed Maria into the world. Which of the following statements is correct in this situation?</span>,
    answers: [
      <span>Maria can receive Canadian citizenship through grant from her grandfather.</span>,
      <span>Maria can receive Canadian citizenship through grant from her father.</span>,
      <span>Her father can sponsor Maria for permanent residence under the Joseph's class, but he must be residing in Canada when Maria becomes a permanent resident.</span>,
      <span>Her father cannot sponsor Maria for permanent residence unless he has a co-sponsor who is a Canadian citizen.</span>
    ],
    correct: 3,
    explanation: <span>Under Citizenship Act s 3(3), grant of citizenship is now limited to only the first generation for children born outside Canada after April 17, 2009. In this case, Maria would not be eligible for grant of citizenship because Alex (her father was the first generation to be born outside Canada and receive citizenship by grant. Joseph could sponsor her as his dependent child under the family class, but he must be residing in Canada when she becomes a permanent resident (IRPR, r 130(2)).</span>
  },
  {
    question: <span>Joseph comes to visit you (a legally licenced CICC immigration consultant) for assistance on April 27th, 2019. Joseph was deemed inadmissible to Canada after failing to comply with the IRPA's section 28 residence requirements. As a result, Joseph' permanent resident status was revoked, and he was served with a removal order on September 18th, 2021. Joseph, with the assistance of another immigration expert, filed an appeal with the Immigration Appeal Division (IAD) on September 20th, 2021. Joseph' appeal was denied by the IAD on April 25th, 2019. On April 26th, 2019, Joseph sacked his former immigration counsellor. Joseph is unsure whether he has any recourse against the IAD's April 25th judgement, and he has formally engaged your services to offer him with your thoughts on the subject. Is there any way for Joseph to appeal the IAD's ruling from April 25th, 2019?</span>,
    answers: [
      <span>Yes, by filing an appeal to the Federal Court of Canada.</span>,
      <span>No, there is not other recourse available to Joseph.</span>,
      <span>Yes, by filing a re-stated appeal to the Immigration Appeal Division (IAD).</span>,
      <span>Yes, by filing an application for leave and for judicial review to the Federal Court of Canada.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is a 29-year-old Canadian permanent resident who came with her family when she was only a few months old. She was a studious and hardworking young lady for the most of her life. She assisted her parents and siblings at home, worked part-time at a supermarket, and volunteered once a week at the local food bank. She got intimately connected with Joseph in the final several years, and she began abusing drugs and drinking excessively. She started stealing money from her parents and later from her job to pay for her medications. When her boss discovered out, he contacted the cops. She was accused with and convicted of stealing $5,000 or more. She was sentenced to two months in prison as well as probation. When should the documentary evidence be presented to the Board once the hearing date has been set?</span>,
    answers: [
      <span>15 days before the hearing.</span>,
      <span>10 days before the hearing.</span>,
      <span>45 days before the hearing.</span>,
      <span>20 days before the hearing.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria and her three children arrived as refugees in Winnipeg eight months ago and have now become permanent residents. Her husband, Joseph, had been missing for almost a year at the time of her application, but she included him as a no accompanying family member on her IMM 0008 application form. Maria arrives at your office, distraught, and informs you that Joseph has been found and wishes to join them in Canada. She is concerned that, as a non-accompanying family member, he will be unable to accompany them to Canada. So, what should you say to her?</span>,
    answers: [
      <span>Because Joseph was declared as a non-accompanying family member, he must submit his own application for refugee status.</span>,
      <span>Maria may submit a One-Year Window of Opportunity request.</span>,
      <span>Maria must sponsor Joseph as a spouse living outside Canada.</span>,
      <span>Because Joseph was declared as a non-accompanying family member, he is ineligible to be sponsored as a spouse living outside Canada.</span>
    ],
    correct: 2,
    explanation: <span>Because it has been less than one year since Maria arrived in Canada, she is a permanent resident living outside Quebec, and she declared Joseph as a non-accompanying family member on her IMM 0008 form, Maria can submit a One-Year Window of Opportunity request and a permanent residence application to the Resettlement Operation Centre in Ottawa.</span>
  },
  {
    question: <span>Maria applied for permanent residency under the Federal Skilled Workers Program. Maria has a bachelor's degree in executive secretaryship and has completed all of her professional training in that sector. Maria, on the other hand, has never worked as an executive secretary. She has worked as a graphic designer for the last eight years, but she does not fulfil the "Employment Requirements" in the NOC description for graphic designer. Maria fears that her application may be turned down. ROC's employment standards are as follows:</span>,
    answers: [
      <span>Must be met by the applicant in all the occupations the applicant wishes to be assessed under.</span>,
      <span>Must be met by the applicant in order for the applicant to qualify.</span>,
      <span>Must not be met by the applicant, as these requirements are not applicable to the skilled workers category.</span>,
      <span>Must be met by all persons applying with the principal applicant.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph is a Jamaican national whose wife died a few years ago. Alex, his eldest son, is his only child. Alex lives in Markham, Ontario, with his wife. Joseph and Maria, who has an 11-year-old son named Alex from a previous relationship, recently married, and now reside in Kingston, Jamaica. Joseph is interested in visiting Canada to meet his grandchild via the grandparent super visa after Alex gave birth to a boy last year.</span>,
    answers: [
      <span>If granted, the super visa will allow Joseph to stay in Canada for up to two years without the need to exit.</span>,
      <span>Alex must provide a letter of invitation for Joseph with a commitment of financial support.</span>,
      <span>Joseph may include Maria and Alex on his application.</span>,
      <span>Joseph must provide proof that he has purchased medical insurance that provides at least $100,000 of Marriage.</span>
    ],
    correct: 3,
    explanation: <span>Applicants for a super visa are permitted to include their spouse or common law partner on their application, but not dependents. Joseph thus may not include Alex on his application.</span>
  },
  {
    question: <span>Joseph is a Jamaican national whose wife died a few years ago. Alex, his eldest son, is his only child. Alex lives in Markham, Ontario, with his wife. Joseph and Maria, who has an 11-year-old son named Alex from a previous relationship, recently married, and now reside in Kingston, Jamaica. Joseph is interested in visiting Canada to meet his grandchild via the grandparent super visa after Alex gave birth to a boy last year.</span>,
    answers: [
      <span>If granted, the super visa will allow Joseph to stay in Canada for up to two years without the need to exit.</span>,
      <span>Alex must provide a letter of invitation for Joseph with a commitment of financial support.</span>,
      <span>Joseph may include Maria and Alex on his application.</span>,
      <span>Joseph must provide proof that he has purchased medical insurance that provides at least $100,000 of Marriage.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph's client gave him a retainer of $1,000 for his permanent residency case. Joseph immediately started working on the paperwork and placed the funds in his company account. What is the first thing Joseph must do before signing the retainer?</span>,
    answers: [
      <span>Start work on the file first.</span>,
      <span>Open a client account.</span>,
      <span>Open a business account.</span>,
      <span>Take the retainer PME course.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>On May 30th, you applied for a Study Permit Extension for your customer. From that date, the original Study Permit will expire in 30 days. After a week, the client phones to inform you that he had a confrontation with a school dean and has now dropped out of that institution. He informs you that he intends to transfer to a new school. The customer hands you a letter of enrolment from a new school on June 29th. You quickly filed another extension application since the first Study Permit included a precise requirement concerning which school your client might attend. Because the head of the original school told IRCC that your client is no longer a student there, you got a denial on the first application after you filed the second application for an extension.</span>,
    answers: [
      <span>Your client is now inadmissible and has to leave Canada before a removal order is issued.</span>,
      <span>Your client is now out of status and you have to apply for restoration of status.</span>,
      <span>Your client maintains implied status as he is waiting for a decision on the second application.</span>,
      <span>Your client is not out of status, because his original Study Permit is still valid.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Alex wishes to move to Canada via the BC Provincial Nominee Program, and enlists the help of Maria, an RCIC with a Shanghai office, to learn about the many possibilities available. Maria must urge Alex to provide paperwork for all of the following at this stage of his application, with the exception of:</span>,
    answers: [
      <span>Proof of his intent and ability to become established in British Columbia.</span>,
      <span>ECA verification of his academic credentials.</span>,
      <span>Valid results from the IELTS, TEF, or CELPIP language exams.</span>,
      <span>A valid job offer from a BC employer in a NOC O/A/B occupation.</span>
    ],
    correct: 4,
    explanation: <span>Under the PNP, provinces have the authority to establish their own selection criteria for nomination, which may differ from the criteria for federal programs (provided they are not incompatible with the IRPA). This includes the ability to recruit immigrants in low- and semi-skilled occupations in accordance with province-specific labour shortages or economic needs.</span>
  },
  {
    question: <span>Joseph is a Mexican City-based RCIC who previously represented Joseph in his student visa application. Joseph's business customer's son, Joseph, is Joseph's client. Joseph is regularly consulted by a corporate customer about immigration issues. Joseph comes to meet Joseph with two of his pals, Joseph, and Joseph, after graduating from McGill University. The three of them want to apply for permanent residency under the start-up visa programme, and they want Joseph to act as their representative on the application. Except for the following, Joseph must inform Joseph, Joseph, and Joseph before signing the retainer agreement.</span>,
    answers: [
      <span>If a conflict between any of them develops and can't be resolved, then Joseph may have to withdraw from representing one or all of them.</span>,
      <span>Any information relating to the matter will be communicated with all of them.</span>,
      <span>Inform Joseph and Joseph of his continuing relationship with Joseph.</span>,
      <span>He can only act on instructions agreed to by written consent of all parties.</span>
    ],
    correct: 4,
    explanation: <span>The CICC Retainer Agreement Regulation does not require Joseph to inform his clients that he can only act on instructions agreed to by written consent of all parties. See Retainer Agreement Regulation, ss 6.1 and 6.2 Joint Retainer Agreements.</span>
  },
  {
    question: <span>Joseph want to support a Syrian family via the group of five programme. The family consists of five individuals: a father who is 56 years old, a mother who is 53 years old, and three children who are 16 years old, 14 years old, and 11 years old. Which of the following is correct?</span>,
    answers: [
      <span>The sponsors have to be 21 years of age or older, Canadian citizen or residents.</span>,
      <span>The Principal applicant has to have at least CLB 4 in one of the official languages.</span>,
      <span>The sponsors have to live in the expected community of settlement.</span>,
      <span>The sponsors have to prove that they have at least $ 50,000 CAD after the in-kind deductions in order to support the family for at least 3 years.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>The situation below is followed by three questions. Joseph and Maria's spousal application is being handled by Maria, an RCIC with ten years of expertise. On their behalf, she has filed a spousal application. Maria phones Maria and informs her that Joseph is assaulting her and that she plans to file for immigration on her own. Maria is told by her mother not to tell her husband about her travels. As Maria hangs up the phone, Joseph calls in a panic, claiming that his wife has abandoned him and that he has no idea what to do. He's sobbing and pleading with Maria for assistance. Maria reassures Joseph and tells him that Maria is only angry, and she gives him Maria's new address. What exactly is wrong with Maria's approach described above?</span>,
    answers: [
      <span>She did not declare a conflict and breached confidentiality.</span>,
      <span>She failed to properly inform CICC about the failed marriage.</span>,
      <span>She did not make any mistakes and handled the situation correctly.</span>,
      <span>She failed to report the abuse to the police.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph is a Canadian citizen who lives in Alex, Chile, and works as a museum curator. In June 2018, he married Maria, an Argentinian citizen residing in Alex, after a lengthy relationship. Joseph's father, on the other hand, was recently diagnosed with early-onset Alzheimer's disease, prompting him and Maria to relocate to Kingston, Ontario, where both of Joseph's parents currently reside. Which of the following assertions concerning Joseph's Maria sponsorship application is correct?</span>,
    answers: [
      <span>Joseph can submit the sponsorship application in Chile, but he must be physically in Canada when Maria becomes a permanent resident.</span>,
      <span>Joseph can only submit the sponsorship application when he is physically in Canada.</span>,
      <span>Joseph can only submit the sponsorship application for Maria in Argentina.</span>,
      <span>Joseph cannot submit the sponsorship application at all.</span>
    ],
    correct: 1,
    explanation: <span>Under IRPR r 130(2), a sponsor who is a Canadian citizen and who does not reside in Canada may sponsor a foreign national as a spouse, as long as the sponsor is residing in Canada when the foreign national becomes a permanent resident.</span>
  },
  {
    question: <span>Maria is a 29-year-old Colombian immigrant who want to live in Canada. She wants to know whether she satisfies the requirements for at least one of the federal economic immigration programmes that are subject to Express Entry. She presents you with a summary of her educational, professional, and financial history during the first consultation: She earned a four-year bachelor's degree in civil engineering from York University in Toronto, Ontario, and worked as a civil engineer in Canada for a year on a full-time, continuous basis while on a NAFTA work visa in 2018. She then returned to Colombia, where she now works as a stay-at-home mom and speaks English but not French. She received a CLB 9 in each of the four language skills on the IELTS exam. She has a relative who lives in the city of Vancouver. Alex, her husband, is unable to join her to Canada owing to work obligations. Maria will be accompanied to Canada by her blended family, which includes three healthy children ages 22, 15, and 7. Maria is the legal parent of Alex's two elder children, whom she adopted. Maria has
    $5,000 in her bank account in Canada that she may use to satisfy her debts. According to the information supplied by Maria, which of the following economic immigration schemes does she match the qualifying requirements for?
    </span>,
    answers: [
      <span>Canadian Experience Class.</span>,
      <span>Federal Skilled Worker Class.</span>,
      <span>Federal Skilled Trades Class.</span>,
      <span>British Columbia Provincial Nominee Program-Skilled Workers category.</span>
    ],
    correct: 1,
    explanation: <span>Maria satisfies the eligibility criteria of the Canadian Experience Class (CEC) under IRPR r 87.l because she possesses the minimum required of one year of full-time work experience as a civil engineer (NOC skill level A) in the past three years and she exceeds the minimum language requirement of CLB 7, as she scored a CLB 9 in each of the four language abilities. Note that CEC applicants are not required to satisfy any minimum settlement funds to meet the program's criteria. Maria does not satisfy the eligibility criteria of t he Federal Skilled Worker Class, because she does not meet the minimum settlement funds requirement set out under IRPR r 76. Maria does not satisfy the eligibility criteria of the Federal Skilled Trades Class, because her experience is not in an eligible skilled trade occupant ion as per IRPR r 87.2(1). Maria does not satisfy the eligibility criteria of the British Columbia Provincial Nominee Programs killed Workers category because she does not have a valid job offer from a BC employer.</span>
  },
  {
    question: <span>Joseph is a Bolivian citizen who is 40 years old. He moved to Canada to pursue a two-year Graphic Design degree at Nova Scotia Community College. The International Student Entrepreneur programme, he was informed, was the simplest way to get nominated. He then spent $80,000.00 CAD on a restaurant, produced new menus, redesigned the website, and redecorated the dining room. He retained the existing crew and added two Canadians, one as a sous chef and the other as a waitress. The restaurant has been doing well; last year's income was $230,000.00, but his nomination application was denied. What was the cause behind this?</span>,
    answers: [
      <span>Waitress is a non-skilled position therefore he didn't comply with the requirement of creating at least 2 permanent, full time, skilled jobs for Canadian or PR.</span>,
      <span>The minimum investment required was $150,000.00.</span>,
      <span>He studied a Graphic design program and the business he bought is not related to his studies.</span>,
      <span>Nova Scotia doesn't have a stream for Students becoming entrepreneurs.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph submitted an application to sponsor his wife. The visa officer who questioned his spouse did not think they were in a real relationship, thus he got a denial letter from the immigration post. He has the option of contesting the judgement. Which of the following tribunals is the proper venue for the case?</span>,
    answers: [
      <span>Immigration and Refugee Protection Division.</span>,
      <span>Federal Court Trial Division.</span>,
      <span>Immigration Appeal Division.</span>,
      <span>Adjudication Division.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph is an RCIC who was just employed by Alex, a Pakistani refugee claimant. Maria, a separate RCIC, handled Alex's refugee application and RPD hearing. Alex chose to employ Joseph to handle her case after her refugee petition was refused. Maria was seldom accessible in the weeks running up to the hearing, so she altered her contact information without telling Alex. She tells Joseph to contact Maria since she doesn't have all of the documentation she needs for her file. Joseph then phones Maria and inquires as to why she was not accessible before to Alex's hearing. Joseph also asks for the documentation that is missing. Maria admits that she was hired by Alex, but she refuses to help her with her case any further. Joseph then writes Maria a furious message laced with profanity, informing her that he intends to defend Alex even if he does not have all of the critical paperwork.</span>,
    answers: [
      <span>No, because Joseph is taking reasonable and necessary steps to minimize any prejudice to his client.</span>,
      <span>Yes, because Joseph was discourteous towards Maria and because he is assisting Alex without all of the pertinent documents needed from her file.</span>,
      <span>No, because Joseph gave Maria a fair opportunity to provide an explanation and send the documents requested.</span>,
      <span>Yes, because Joseph is not allowed to poach clients from another Member while the matter is still ongoing.</span>
    ],
    correct: 2,
    explanation: <span>Joseph has breached the Code of Professional Ethics. A Member shall be courteous and civil in all professional dealings with other Members (Article 4.3.1). A Member shall perform all services on behalf of a Client competently (Article 5.1.1). Joseph must respect his duties under 4.3.1 in addition to minimizing prejudice and providing Maria with the opportunity to explain. It is not true that Joseph is not allowed to "poach clients" while a matter is ongoing. A client is able to hire a new representative at any point.</span>
  },
  {
    question: <span>Joseph is an international student at the University of Saskatchewan, where he is pursuing a four-year bachelor of business degree. Joseph will graduate in December after taking an additional semester to accomplish his undergraduate thesis. He wants to apply for an open postgraduate work visa so he may remain in Saskatoon and get job experience in Canada. Despite the fact that he has yet to get a job offer, he is certain that he will find work quickly after graduation because to the numerous relationships he has established via his program's friends and colleagues. Which of the following statements is correct?</span>,
    answers: [
      <span>If granted, Joseph's postgraduate work permit will be valid for three years.</span>,
      <span>Joseph is not eligible to apply for a postgraduate work permit because he does not have a valid job offer.</span>,
      <span>If granted, Joseph's postgraduate work permit will be valid for four years.</span>,
      <span>Joseph must apply for a postgraduate work permit before he graduates.</span>
    ],
    correct: 1,
    explanation: <span>If an applicant's length of studies is for two years or more, a work permit may be issued for three years. It is not correct that Joseph must apply for a postgraduate work permit before he graduates. An applicant for a postgraduate work permit must apply within 180 days after their school has issued their final marks, and the applicant's study permit must have been valid at some point during that 180-day period. Reference: IRCC.</span>
  },
  {
    question: <span>Joseph wants to sponsor Maria, his common-law partner, and enlists the help of Joseph, an RCIC in Toronto. When Joseph meets with Joseph to discuss the intricacies of his connection with Maria, he notices that Joseph is unable to answer simple questions regarding Maria's birthday, family, or educational history. Joseph ultimately tells Joseph that he is only a family friend who has volunteered to assist Maria in her journey to Canada. In these conditions, what should Joseph do?</span>,
    answers: [
      <span>He must report Joseph to the CICC.</span>,
      <span>He must withdraw from representing Joseph.</span>,
      <span>He must advise Joseph that the proposed application is dishonest and fraudulent and should be stopped.</span>,
      <span>He must act in accordance with his client's instructions since the fraud would likely be discovered by immigration officers anyway.</span>
    ],
    correct: 3,
    explanation: <span>If an RCIC is retained and asked to do something that they know or ought to know is dishonest or fraudulent, they shall advise the person that the proposed conduct is prohibited and must stop. The RCIC must withdraw from representing the person only if, despite their advice, the person still intends to pursue the prohibited course of conduct (Code of Professional Ethics, article 7.2.1).</span>
  },
  {
    question: <span>Which of the following individuals is not permitted to work in Canada without a work permit?</span>,
    answers: [
      <span>A senior executive coming for a board of directors meeting in Vancouver (for a US - Canadian company).</span>,
      <span>An intra-company transferee from a Mexican company coming to the Canadian branch (bearing specialized knowledge) to train Canadian staff for one year.</span>,
      <span>A referee from Colorado is coming to referee a Whitecaps game (soccer) with Montreal Impact.</span>,
      <span>An industrial refrigeration mechanic from USA coming to fix a refrigerator that was sold by his company to a restaurant in Yaletown, Vancouver.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Alex, a Mexican national, wants to work in Canada and needs a work visa. She has been offered a position as a medical doctor (NOC 3112) in an Alberta clinic. Her responsibilities are limited to doing research and instructing her medical staff. Alex has a medical degree and has worked as a medical doctor full-time in her own country for over 10 years. What advise would you give?</span>,
    answers: [
      <span>The employer must obtain an offer of employment number from IRCC and subsequently Alex should apply for an LMIA exempt work permit under NAFTA to IRCC.</span>,
      <span>The employer must obtain a positive LMIA from Employment and Social Development Canada and subsequently Alex should apply for a work permit to IRCC.</span>,
      <span>Alex should apply for an LMIA exempt work permit under GATS to IRCC.</span>,
      <span>The employer must apply for an LMIA to Employment and Social Development Canada and Alex should apply simultaneously for a work permit to IRCC.</span>
    ],
    correct: 1,
    explanation: <span>Alex's employer must obtain an offer of employment number from IRCC, and subsequently, Alex should apply for an LMIA-exempt work permit under NAFTA to IRCC. Due to Alex's Mexican citizenship, education, and professional background as a medical doctor/physician, she meets the criteria for an LMIA-exempt work permit under NAFTA. Despite being exempt from the LMIA provision, Alex's employer is still required to apply for and obtain an offer of employment number from IRCC (this requirement a!lows IRCC to monitor employer compliance). Upon receipt of this number, Alex should apply for her NAFTA work permit to IRCC. It is not correct that Alex's employer is required to apply for an LMIA to ESDC, because there is an exemption from this requirement under NAFTA. Alex does not meet the criteria of the GATS, because, among other factors, her profession as a medical doctor is not included in the GATS list of professional occupations. Alex's employer is not required to apply for an LMIA to ESDC, because she is exempt from this requirement under NAFTA.</span>
  },
  {
    question: <span>Alex is an RCIC with over eight years of experience in Moncton, New Brunswick. On May 3, 2022, he was arrested at his house and charged with cocaine possession and trafficking, much to the surprise of many in the neighborhood. Alex's criminal trial is set to begin in December 2022, and he has promised to fight the allegations and maintain his innocence via his counsel. However, in light of the charges, CICC counsel files an urgent move for a Discipline Committee hearing and serves Alex with notice on November 11, 2022. Which of the following statements is correct in this situation?</span>,
    answers: [
      <span>The hearing on the urgent motion must be heard by November 20, 2022.</span>,
      <span>Alex's CICC membership cannot be suspended because he has not been convicted on the charges yet.</span>,
      <span>Alex's ICCRS membership will be automatically revoked until the conclusion of his criminal trial.</span>,
      <span>The hearing on the urgent motion must be heard by November 26, 2022.</span>
    ],
    correct: 4,
    explanation: <span>An urgent motion to the Discipline Committee must be heard within 15 days after it has been delivered to the member (Discipline Committee Rules of Procedure, s 11.1).</span>
  },
  {
    question: <span>Maria, a 65-year-old Canadian citizen, crossed paths with Joseph, a 30-year-old unauthorized immigrant. After they fell in love, Maria applied to sponsor him for permanent residency in Canada under the spouse and common-law partner in-Canada category. They went to an interview, and the officer turned down the application because she believed the connection was not real and had been formed just to help Joseph acquire permanent residency. Which of the following is Maria's legal recourse if she wants to overturn the officer's decision?</span>,
    answers: [
      <span>She can make an application to the Immigration Appeal Division.</span>,
      <span>She can make an application to the Immigration Division.</span>,
      <span>She can make an application for leave to the Supreme Court of Canada.</span>,
      <span>She can make an application for leave and judicial review to the Federal Court.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria has been a permanent resident for eleven years. She was in a severe feud with her ex-husband at the time, who had custody of her four and six-year-old children and refused to let them attend to their medical appointments. Maria was content in her new relationship and had no intention of include her children in her permanent residency application or bringing them to Canada. As a result, she didn't attempt to convince her ex-husband to have the kids tested. She just learned that her ex-husband perished in a vehicle accident, and the children have shown an interest in being sponsored to Canada. Will Maria be able to support her children via sponsorship?</span>,
    answers: [
      <span>Yes, the children are members of the family class.</span>,
      <span>Yes, because they are her biological children.</span>,
      <span>No, the children do not meet the requirements.</span>,
      <span>No, the children are past the age of dependency.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph sponsored his parents, Maria, and Abraham, to come to Canada as members of the family class after becoming a permanent resident of Canada. On June 2, 2016, Joseph's parents became permanent residents, and the three of them currently reside in Brandon, Manitoba. Alex, Joseph's younger brother, is 28 years old, unmarried, and still works as an advertising account executive in Australia. Alex has indicated an interest in immigrating to Canada in order to be reunited with his whole family. In these conditions, you should:</span>,
    answers: [
      <span>Maria or Abraham can sponsor Alex as a member of the family class.</span>,
      <span>Joseph can sponsor Alex as a member of the family class.</span>,
      <span>Alex is not eligible to be sponsored as a member of the family class.</span>,
      <span>Alex can be sponsored under the family class because he is considered an "orphaned" relative.</span>
    ],
    correct: 3,
    explanation: <span>Alex is not eligible to be sponsored under the family class by Joseph, Maria, or Abraham. IRPR r ll7(l)(h) does not apply in these circumstances because all of the potential sponsors already have another relative in Canada who is a permanent resident. Alex is not an "orphaned" relative because he is older than 18, and all of his family members are Canadian permanent residents.</span>
  },
  {
    question: <span>Maria arrived in Canada intending to work as an electrical engineer. She found a job in Calgary and was informed that he would not need to get a Labour Market Impact Assessment to hire her and that she would be able to apply for her work visa once she arrived in Canada. If the employer is right, what category do you believe Maria's work visa would fall under?</span>,
    answers: [
      <span>An after sales service-person.</span>,
      <span>A provider of emergency services.</span>,
      <span>A NAFTA professional.</span>,
      <span>An intra-company transferee.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Alex is a Canadian citizen who has spent the previous three years working for a multinational telecom firm in France. Meri was elevated to a senior position at the company's headquarters in Mississauga, Ontario, after marrying her colleague, Maria, in Paris last year. When would Meri's promise to assist Maria expire if she sponsors her as her spouse under the family class?</span>,
    answers: [
      <span>Ten years after Maria becomes a permanent resident.</span>,
      <span>Three years after Maria becomes a permanent resident.</span>,
      <span>Until Maria becomes a Canadian citizen.</span>,
      <span>No undertaking is required since Meri is a Canadian citizen and Maria is coming to Canada as her wife.</span>
    ],
    correct: 2,
    explanation: <span>Under IRPR r 132(l)(b)(i), the sponsor's undertaking to a foreign national who is their spouse lasts for three years after the day that the foreign national becomes a permanent resident.</span>
  },
  {
    question: <span>Joseph arrived in Canada and applied for refugee status. He mentioned in his story that he fled his native nation on two times when he was having troubles and then returned home. What effect would his departure from and return to his homeland have on his case?</span>,
    answers: [
      <span>Returning to his country of nationality will have an impact on his credibility.</span>,
      <span>There will not be an impact as he had a legal right to return to his country.</span>,
      <span>There will not be an impact as he did not have status in the other countries.</span>,
      <span>It will add to his credibility because he left his country to have some peace.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Two years ago, Joseph arrived in Canada and filed a refugee claim at the port of entry. He made acquaintances with several members of a criminal organization as he waited in Canada. He was unable to find work, and social aid was insufficient to support his lifestyle. He became engaged in cocaine distribution and was accused and convicted of the crime. His application for refugee status has been halted. Suspending a refugee protection application under the Refugee Protection Division is possible if:</span>,
    answers: [
      <span>The claimant is facing an allegation of organized criminality before the Immigration Division.</span>,
      <span>The claimant has been convicted in Canada of a criminal offence punishable by more than 10 years.</span>,
      <span>The claimant has previously filed a claim for protection in Canada, and the claim was rejected, abandoned, or withdrawn.</span>,
      <span>The claimant came to Canada through a safe third country and did not disclose it upon entry to Canada.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph has been in Canada for five years. He filed a refugee claim, but it was denied because the board member did not believe he was trustworthy, citing substantial inconsistencies in his port of entry notes, his BOC, and his oral evidence. A violent coup d'etat occurred recently, and his nation of origin was placed on a deportation moratorium list. Joseph is unable to be deported and must work. In Joseph's instance, what is the most probable scenario?</span>,
    answers: [
      <span>He may work in Canada without the need to obtain a work permit.</span>,
      <span>He may be issued a work permit without the need to obtain an LMIA.</span>,
      <span>He may apply for a work permit through the Canadian Consulate in Los Angeles.</span>,
      <span>He may not be able to work in Canada despite his situation.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is a 46-year-old Italian citizen with a good command of the English language. During her most recent visit to Canada, she took the CELPIP and received an 8 in listening, a 9 in reading, a 7 in speaking, and a 7 in writing. She graduated with a bachelor's degree in business administration. She has a web design firm that has been in operation for the last seven years. She wants to come to Canada to study. Maria asked you for suggestions for things she could do instead of going back to school since she doesn't want to. What possibilities might you discuss with her?</span>,
    answers: [
      <span>Self-employed Program because she has more than 2 years of experience managing her own business.</span>,
      <span>Startup visa because she has a business idea, her English is more than CLB 5 and she has the money to invest the $75,000 CAD required.</span>,
      <span>Business program through a Provincial Nomination, but she will have to tell you what her assets and investment could be.</span>,
      <span>Business visitor visa and after year in Canada she will qualify for Permanent residence under the Canadian Experience Class.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Except for the following, all of the following are true of a temporary residence permit (TRP):</span>,
    answers: [
      <span>Foreign national can not apply for a TRP until five years after the foreign nationals RPD claim was determined to be withdrawn or abandoned.</span>,
      <span>Is valid for a maximum period of 3 years.</span>,
      <span>It may be cancelled anytime by the minister.</span>,
      <span>A designated foreign national can not apply for a TRP until five years after, having been designated or five years after the final determination of the foreign national refugee claim by the RPD.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria applied for a study visa on her own behalf, seeking to leave Colombia to study in Canada. She got a letter three weeks ago denying her study visa application due to a lack of evidence that she had the requisite cash to study. Her denial letter gave no specific grounds for her refusal, simply that the officer was unsatisfied with the money. Her evidence revealed that her Canadian partner, who was paying for her education, earned $50,000 per year, and had $20,000 in savings. Maria feels the ruling is unjust and intends to appeal it. Is it permissible for Maria to ask the officer to rethink the unfavourable decision?</span>,
    answers: [
      <span>No, because there is no legal requirement to reconsider in the legislation.</span>,
      <span>Yes, because the officer did not send her a procedural fairness letter before rejecting her case.</span>,
      <span>Yes, because adequate reasons for the refusal were not provided to her.</span>,
      <span>No, because the reconsideration time limit is 15 days after the decision.</span>
    ],
    correct: 2,
    explanation: <span>Neither the Act nor the Regulations (lRPA) compel lRCC to reconsider a negative decision; therefore, an applicant has no legal right to have the matter reconsidered. There is no obligation on an officer to provide further information or explanations or issue a procedural fairness letter in these circumstances. That is only required when the officer refuses based on misrepresentation or fraudulent documents. In that case, the applicant must be given a chance to refute the officer. But in general, the applicant has the onus to provide all proof up front and has no right to a second chance to provide further evidence or submissions. Nor is an officer obligated to give detailed reasons in the refusal letter. As there is no reconsideration, there is no applicable time period, but 15 days refers to the time limit to file in the Federal Court for a decision made in Canada.</span>
  },
  {
    question: <span>Following the scenario, there are five questions. Test Case: Maria is a 29-year-old permanent resident of Canada who immigrated to the country with her family when she was only a few months old. For the most of her youth, she was diligent and diligent. She assisted her parents and siblings at home, worked part-time at a supermarket, and volunteered once a week at a local food bank. She got intimately connected with Joseph in the previous several years and began abusing drugs and drinking excessively. To pay for her narcotics, she started robbing her parents and later her employer. Her employer discovered this and contacted the authorities. She was charged with and convicted of stealing in excess of $5,000. She was sentenced to two months in prison and two years probation. Maria can anticipate what will happen to her immigration status after she has served her term.</span>,
    answers: [
      <span>Nothing will happen to her because she has been in Canada for 29 years.</span>,
      <span>Nothing will happen to her because she is a Canadian citizen.</span>,
      <span>She will be called to an admissibility hearing and will get a deportation order.</span>,
      <span>She will be removed from Canada immediately after serving her sentence.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: A customer of Joseph pal has filed a complaint. Joseph pal is certain that he done everything correctly for his client and that they ultimately obtained their visa. True, the file took a little longer to complete, but Joseph pal completed all the forms accurately and wrote an excellent covering letter. Only once was the file returned, and that was because his assistant sent the application to the incorrect office. No, he did not inform the customer; nonetheless, this was not his responsibility. The customer was meant to deal only with him and refrain from contacting Immigration. Immigration informed the customer that the file had been forwarded to the incorrect office initially. How would you have handled this issue differently?</span>,
    answers: [
      <span>Advise the client the forms changed, and then resubmit the file.</span>,
      <span>Advise the client the file was returned, get instructions from the client, and then resubmit the file.</span>,
      <span>Advise the client the file was returned, and charge for the extra work.</span>,
      <span>Advise nothing. Return the file to the right office.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria used the Federal Skilled Trades Class to apply for permanent residency. Unfortunately, she was declared inadmissible due to misrepresentation after presenting the IRCC with false information/documentation about her educational and professional experience. In determining her inadmissibility, what standard of evidence was used?</span>,
    answers: [
      <span>Beyond a reasonable doubt.</span>,
      <span>Balance of probabilities.</span>,
      <span>Reasonableness.</span>,
      <span>Reasonable probabilities.</span>
    ],
    correct: 2,
    explanation: <span>The standard of proof for inadmissibility on the basis of misrepresentation (IRPA s 40) is the balance of probabilities. Reference: ENF! Inadmissibility, p 26.</span>
  },
  {
    question: <span>Maria is a French citizen who was born in France to a Canadian mother. Maria moved to Canada when she was fifteen years old. She moved to France to study at the age of 24 and gave birth to a daughter there. Which of the following persons is a citizen of Canada?</span>,
    answers: [
      <span>Maria's mother.</span>,
      <span>Maria.</span>,
      <span>The baby.</span>,
      <span>A and B.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Stefan arrives at your workplace with his parents, who have a valid work visa for the next four years. They came to Canada last year, and before starting high school, he sought for and acquired a student visa to study here. He just graduated from high school and has been admitted to a university to pursue a Bachelor's degree. He is unsure if he will need to apply for a new study visa.</span>,
    answers: [
      <span>Stefan doesn't need to do anything per the new IRCC rules.</span>,
      <span>Stefan can go to a DLI at a post-secondary level without changing conditions of his study permit.</span>,
      <span>Stefan has to notify IRCC through My CIC account about changing schools.</span>,
      <span>Stefan needs to apply to change conditions of his stay as a student and get a new study permit.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: ABC Technology Inc., a Canadian firm situated in Edmonton, Alberta, has secured a new contract with the Government of Alberta to build and deploy a new IT system for the province's payroll system. ABC is looking for someone with both IT and project management expertise. They've advertised widely but have yet to find a suitable Canadian or permanent resident. They applied for a high-paying job and were just turned down. You come upon the following:<br/>
    • Ads were only published in two places: a major newspaper and a renowned web service (ex monster, Workopolis)<br/>
    • The salary provided was below the median rate, and the ads were run for a 2-week period and expired 4 months previous to the LMIA filing.<br/>
    • ABC's present project management team is on strike, and the individual recruited will take the position of the striker(s)<br/>
    • The employer failed to meet the prior LMIA work permit holder's employment criteria, resulting in a failure to comply.<br/><br/>
    How long should advertisements be placed?</span>,
    answers: [
      <span>Three weeks.</span>,
      <span>Two weeks.</span>,
      <span>Four weeks.</span>,
      <span>One week.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria works as a "motor vehicle body repairer" in Argentina and wants to know whether her job qualifies her for the Federal Skilled Trades Program, providing she fits all of the program's other qualifications. Is it possible that her job (motor vehicle body repairer) qualifies her for the Federal Skilled Trades Program? Choose the most appropriate response.</span>,
    answers: [
      <span>Yes, because her occupation is in major group 72 of the NOC.</span>,
      <span>Yes, because her occupation is in major group 73 of the NOC.</span>,
      <span>No, this occupation would not qualify under this program.</span>,
      <span>Yes, because her occupation is in major group 82 of the NOC.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Except for the following, every one of the following is true of a temporary resident permit (TRP):</span>,
    answers: [
      <span>It may be cancelled at any time by the minister.</span>,
      <span>It is valid for a maximum period of three years.</span>,
      <span>A designed foreign national cannot apply for a TRP until five years after having been designated or after the final determination of the foreign national's refugee claim by the RPD.</span>,
      <span>A foreign national cannot apply for a TRP until five years after the foreign national's RPD claim was determined to be withdrawn or abandoned.</span>
    ],
    correct: 4,
    explanation: <span>It is true that a TRP is valid for a maximum period of three years (IRPR, s 63(d)), that it may be cancelled at any time by the minister (IRPA, s 24(3)), and that a designated foreign national cannot apply for a TRP until five years after the foreign national has been designated or after the final determination of the foreign national's refugee claim by the RPD (IRPA, s 24(5)). Under IRPA s 24(4), a foreign national whose claim was determined to be withdrawn or abandoned by the RPD cannot apply for a TRP until one year, not five years, has passed from the date it was withdrawn or abandoned.</span>
  },
  {
    question: <span>Each of the following factors will be considered by the decision-maker when evaluating an application on humanitarian and compassionate grounds, with the exception of:</span>,
    answers: [
      <span>The best interests of any dependent children of the applicant.</span>,
      <span>The applicant's degree of establishment and ties to Canada.</span>,
      <span>The risk of persecution, risk to life, or cruel and unusual punishment to the applicant if they are removed.</span>,
      <span>The health conditions of the applicant.</span>
    ],
    correct: 3,
    explanation: <span>H&C decision-makers do not assess factors such as persecution, risk to life, or cruel and unusual punishment.</span>
  },
  {
    question: <span>Alex, a US citizen, with a PhD in economics from Alexford University in California and is a well-known macroeconomics and income inequality writer, researcher, and academic. He has been asked to be a visiting lecturer at the University of Western Ontario for the forthcoming academic year, and many undergraduate and graduate students are looking forward to attending his unique lecture series. Alex must complete the following tasks before arriving to Canada to teach:</span>,
    answers: [
      <span>Obtain a work permit.</span>,
      <span>Obtain a work permit and an LMIA from the ESDC.</span>,
      <span>Obtain an LMIA from the ESDC.</span>,
      <span>Alex is exempt from needing to obtain a work permit or an LMIA from the ESDC in these circumstances.</span>
    ],
    correct: 1,
    explanation: <span>Foreign academics who will work as visiting professors are exempt from the requirement to obtain an LMIA, but must obtain a work permit (IRPR, r 205(b)).</span>
  },
  {
    question: <span>Joseph is a very successful immigrant entrepreneur. He went widely over the globe to expand this company's foreign markets. In reality, he has spent 725 days physically present in Canada during the previous five years. His Permanent Residency Card hasn't expired yet. What should you advise Joseph about his options for getting this status determined while he's away?</span>,
    answers: [
      <span>Advise Joseph that there is no way to seek such determination, rather, he must travel back Canada and a decision will be made at the airport upon entry.</span>,
      <span>Advise Joseph that he must apply for a travel document while abroad, and its issuance will serve as a confirmation that he is still a PR.</span>,
      <span>Advice Joseph that he can go to the Canadian Embassy in Budapest and apply for a Permanent Residence Card, which will either be issued or denied.</span>,
      <span>Advise Joseph that he can seek an advance ruling certificate from the Canadian embassy in Budapest, which will either be issued or denied.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>The situation below is followed by three questions. The customer of Joseph has filed a complaint. Joseph pal is certain that he handled everything correctly for his client, and that they eventually received their visa. Sure, the paperwork took a little longer to process, but Joseph pal had filled out all of the forms properly and included a fantastic cover letter. The application was only returned once, and that was because his assistant sent it to the incorrect office. Yes, he failed to inform the customer, but this was not his responsibility. The customer was meant to deal with him alone and not contact Immigration. Immigration was the one who informed the customer that the file had been routed to the incorrect office initially. Should Joseph pal have informed the customer of the error in submitting the paperwork to the incorrect office?</span>,
    answers: [
      <span>Yes, because he has a duty to be honest and candid.</span>,
      <span>No, the assistant made the mistake.</span>,
      <span>Yes, because he could have charged another $200 for the extra work.</span>,
      <span>No, because he owes a duty of confidentiality to his assistant.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: The Toronto Raptors just traded Joseph to the San Antonio Spurs for Joseph, a basketball player. Many times, Joseph came to play against the Raptors. The youngster is required to attend elementary school. Is she required to get a permission, and if so, where should they apply?</span>,
    answers: [
      <span>She needs a study permit and they should apply for it at the visa post.</span>,
      <span>She needs a study permit and they can apply for it online or at CPC.</span>,
      <span>She needs a study permit and they should apply for it at the port of entry.</span>,
      <span>She does not need a study permit and she would show her parent's work permit.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>On January 28, 2016, Maria sponsored Joseph as her spouse under the family class, and he became a permanent resident of Canada. The following year, the couple split up, and their divorce was finalized on October 8, 2018. On September 12, 2022, Joseph returned to his birthplace of Tehran to marry Alex. He retains Maria, an RCIC in Tehran, to inquire about Alex's ability to sponsor her for permanent residency as his husband.</span>,
    answers: [
      <span>He cannot sponsor Alex until January 28, 2021, and he may submit his application in Tehran.</span>,
      <span>He cannot sponsor Alex until January 28, 2021, and he must submit his app location while residing in Canada.</span>,
      <span>He cannot sponsor Alex until September 12, 2022, and he must submit his application while residing in Canada.</span>,
      <span>He cannot sponsor Alex until he becomes a Canadian citizen.</span>
    ],
    correct: 2,
    explanation: <span>Under IRPR r 130(3), a sponsor who became a permanent resident after being sponsored as a spouse cannot apply to sponsor another foreign national as a spouse unless five years have elapsed from the date the sponsor became a permanent resident. In this case, Joseph cannot sponsor Alex until five years have passed since he became a permanent resident (that is, January28, 2021).</span>
  },
  {
    question: <span>The notice of appeal must be sent to the IRB register in all appeals to the Immigration Appeal Division, with the exception of appeals by permanent residents who have lost their status due to noncompliance with section 28 of the IRPA.</span>,
    answers: [
      <span>No later than 30 days after the appellant received the reasons for the refusal.</span>,
      <span>No later than 60 days after the appellant received the reasons for the refusal.</span>,
      <span>No later than 20 days after the appellant received the reasons for the refusal.</span>,
      <span>No later than 45 days after the appellant received the reasons for the refusal.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph is a three-year resident of Canada who has lived and worked in Lethbridge, Alberta. He want to sponsor his wife, Maria, as well as his two dependent children, John and Anna, who still reside in Romania. What are the total costs associated with this sponsorship application?</span>,
    answers: [
      <span>1350.</span>,
      <span>850.</span>,
      <span>2350.</span>,
      <span>550.</span>
    ],
    correct: 1,
    explanation: <div>
      <ul>
        <li>Joseph (sponsor):
          <ul>
            <li>$75 = Sponsorship fee.</li>
          </ul>
        </li>
        <li>Maria (spouse, principal applicant):
          <ul>
            <li>$490 = principal applicant processing fee;</li>
            <li>$515 = right of permanent residence fee.</li>
          </ul>
        </li>
        <li>John (dependent child):
          <ul>
            <li>$75 = Sponsorship fee;</li>
            <li>$75 = Processing fee.</li>
          </ul>
        </li>
        <li>Anna (dependent child):
          <ul>
            <li>$75 = Sponsorship fee;</li>
            <li>$75 = Processing fee.</li>
          </ul>
        </li>
        <li>TOTAL FEES = (75 + 490 + 515 + 150 + 150) = $1,380.</li>
      </ul>
    </div>
  },
  {
    question: <span>Maria arrived in Calgary with a work visa allowing her to work for a certain company. She's been in Calgary for a year and would want to file for a work visa extension since she loves her job. Unfortunately, she did not submit her renewal application to the case processing centre until four months after her work permit had expired, and she was found inadmissible for continuing to work without a legal permission. Maria might apply for the following to stay in Canada in certain circumstances:</span>,
    answers: [
      <span>A temporary resident permit.</span>,
      <span>Maria cannot remain in Canada in these circumstances.</span>,
      <span>An extension of status.</span>,
      <span>Restoration of status.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>The following the scenario is used in six questions.<br/>
    Test Case: ABC Technology Inc., a Canadian firm headquartered in Edmonton, Alberta, Canada, has been awarded a new contract by the Government of Alberta to build and install a new information technology system for the province's payroll system. ABC is looking for someone with both IT and project management expertise. They have advertised widely and have not been successful in locating a suitable Canadian or permanent resident. They just filed an LMIA for a high- wage employment that was denied. You come upon the following:<br/>
    • Advertisements were posted in only two locations: a major newspaper and a recognized web service (ex monster, Workopolis)<br/>
    • Advertisements that ran for two weeks and ended four months previous to the LMIA submission.<br/>
    • The pay offered was lower than the median wage.<br/>
    • ABC's present project management team is on strike, and the individual recruited will take the job of the striking employee(s)<br/>
    • The employer failed to comply with the prior LMIA work permit holder's employment terms.<br/><br/>
    Where else should ABC have advertised to achieve the statutory recruiting requirement?</span>,
    answers: [
      <span>No additional advertising was needed.</span>,
      <span>Canadian Government job Bank.</span>,
      <span>Alberta Job Bank.</span>,
      <span>Word of mouth advertising.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is a 45-year-old Colombian computer engineer with a NOC skill level of A. She has a WES- accredited master's degree and has taken the IELTS and earned the best score in all of the abilities examined. She has worked in her profession for the last eight years, doing a significant proportion of the primary activities for her profession as defined by NOC obligations. Her brother is a Canadian citizen who lives in Canada. In the Federal Skilled Worker Category, she obtains 69 points, while in Express Entry, she receives 386 points. The most recent CRS score was 441. Maria is desperate to see her brother in Canada and will go to any length to gain permanent residency. Question: If she is chosen by the province, how many points will she receive?</span>,
    answers: [
      <span>200 points.</span>,
      <span>50 points.</span>,
      <span>600 points.</span>,
      <span>441 points.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph is a foreign person who married a Canadian citizen and desires to begin his application for permanent residency. He has a little issue. He was prosecuted and convicted of an offence in his nation eight years ago, for which he faced up to 10 years in jail under Canada's Criminal Code. He was sentenced to two years in prison, one year on probation, and a fine. Five years ago, he completed his probation. He has failed to pay the fine. When is Joseph eligible to seek rehabilitation?</span>,
    answers: [
      <span>He cannot apply because he has not completed his sentence.</span>,
      <span>Right away as he finished probation five years ago.</span>,
      <span>He would be deemed rehabilitated so he does not need to apply.</span>,
      <span>He is married to a Canadian citizen he does not need rehabilitation.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph, a Polish company's vice-president of marketing, is required to visit Canada to monitor the activities of the Canadian subsidiary. He wants to come to Canada as an IRPA Intra-Company Transferee. For the last several months, he has been employed by the corporation in Poland. He must demonstrate that he has worked for the main office in Poland for the following:</span>,
    answers: [
      <span>One year immediately prior to the date of the application.</span>,
      <span>One year in the past three years.</span>,
      <span>At least one day immediately prior to the date of the application.</span>,
      <span>No stipulated time period prior to the application exists.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: ABC Technology Inc., a Canadian firm situated in Edmonton, Alberta, has secured a new contract with the Government of Alberta to build and deploy a new IT system for the province's payroll system. ABC is looking for someone with both an IT and project management expertise. They've advertised widely but have yet to find a suitable Canadian or permanent resident. They applied for a high-paying job and were just turned down. You come upon the following:<br/>
    • Ads were only published in two places: a major newspaper and a renowned web service (ex monster, Workopolis).<br/>
    • The salary provided was below the median rate, and the ads were run for a 2-week period and expired 4 months previous to the LMIA filing.<br/>
    • ABC's present project management team is on strike, and the individual recruited will take the position of the striker(s)<br/>
    • The employer failed to meet the prior LMIA work permit holder's employment criteria, resulting in a failure to comply.<br/><br/>
    The Employer inquires about the median salary and how it relates to the LMIA. You suggest:</span>,
    answers: [
      <span>The are no wage requirements for LMIA applications.</span>,
      <span>The median wage is the minimum wage for Alberta.</span>,
      <span>The wage being offered must meet the median wage assigned to the occupation.</span>,
      <span>The median is LICO plus 30 percent.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Joseph worked as a server in Mexico City for two years after graduating from high school to earn money for his ambition of moving to Canada. He came in Vancouver, British Columbia, with a one-year open work visa and has been working as a Spanish language tour guide for a tourism firm for the last ten months. Joseph's supervisor is impressed with his work ethic and pleasant interactions with the agency's customers, and he gives him a permanent tour guide position. Joseph is overjoyed and consults with Ira, an RCIC, about his chances for obtaining permanent residency.</span>,
    answers: [
      <span>No, because he does not meet the educational requirements for any of the BC PNP's streams.</span>,
      <span>Yes, because he meets the requirements of at least one of the BC PNP's streams.</span>,
      <span>No, because he does not meet the work experience requirements for any of the BC PNP's streams.</span>,
      <span>No, because he has not worked for long enough in a job in British Columbia to qualify under any of the BC PNP's streams.</span>
    ],
    correct: 4,
    explanation: <span>Joseph is eligible under the entry level and semiskilled worker BC PNP category</span>
  },
  {
    question: <span>Maria is a Mexican citizen who has never lived in another nation. Maria came from Mexico to Belgium at the age of 19 to pursue her post-secondary education. She was able to start working and receive social assistance, including healthcare, after graduation. She spent three years in Belgium before returning to Mexico to be closer to her family. Maria had an intense connection with Alex, a young lawyer she met online, after returning to Mexico. At first, Alex was kind and charming, but he rapidly deteriorated into a domineering and aggressive figure. He withheld money from her, forcing her to rely on theft to survive. Maria had been subjected to regular beatings and had been hospitalized twice as a consequence of Alex's physical violence after just six months together. Maria was also threatened by Alex, who told her that if she attempted to flee, he would murder her. Maria decided to denounce him to the police in January 2022. When they did nothing, she became worried that he would find out that she had gone to the police, and she resolved to run for her life. She had the option of returning to Belgium and restoring her status there, but she chose to go to Canada instead since she had relatives in Vancouver. She couldn't fly since she didn't have enough money or a valid passport, so she had to wait before leaving Mexico. On October 8, 2022, she landed in Canada and filed a refugee claim at a port of entry. Alex had been killed in a vehicle accident only a week after she arrived. Which of the following is true if Maria's refugee application is refused and deemed to have no credible basis?</span>,
    answers: [
      <span>She can apply for leave for judicial review to the Federal Court within 15 days.</span>,
      <span>She can appeal to the RAD within 15 days.</span>,
      <span>She can appeal to the IAD within 30 days.</span>,
      <span>She can appeal to the RAD within 30 days.</span>
    ],
    correct: 1,
    explanation: <span>Maria may apply for leave for judicial review to the Federal Court within 15 days. A person can apply for judicial review for any determination made under the IRPA provided that any right of appeal under the IRPA is exhausted. This is the case here. Notice of application for judicial review must be made to the Federal Court within 15 days of when the applicant was notified of the decision in Canada (IRPA s 72(2)(b)). Maria may not appeal to the RAD because the claim was found to have no credible basis (IRPA s 110(2)(c)). The IAD does not have jurisdiction to hear an RPD appeal (IRPA s 63(b)).</span>
  },
  {
    question: <span>Joseph was granted a work visa in Canada. He didn't get along with his boss, so he looked for another job and started working without a new work permit. The new employer has gotten an LMIA and requires Joseph to secure the necessary work authorization in order to work for him. When Joseph filled out the application, he said that he had been employed by the new company. If it is discovered that a foreign citizen worked in Canada without obtaining a work permit as required by law, the foreign national will be barred from receiving a work permit for the following amount of time:</span>,
    answers: [
      <span>Six months from committing the breach.</span>,
      <span>Three years from committing the breach.</span>,
      <span>Twelve months from committing the breach.</span>,
      <span>Two years from committing the breach.</span>
    ],
    correct: 1,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Maria filed a refugee claim with the IRCC, which was sent to the RPD. Maria interacts with Alex, an RCIC, before her claim hearing and chooses to file an H&C application because she believes it will give her a greater chance of remaining in Canada. Alex should tell Maria the following in this situation:</span>,
    answers: [
      <span>Her refugee claim and H&C application can be considered concurrently.</span>,
      <span>She must with raw her refugee claim before an H&C application can be considered.</span>,
      <span>She cannot make an H&C application until one year after her claim was referred to the RPO.</span>,
      <span>She cannot make an H&C application until her refugee claim is decided.</span>
    ],
    correct: 2,
    explanation: <span>A person cannot make an H&C application if they have a pending refugee claim. Maria must withdraw her refugee claim before her IRB hearing in order to be able to make an H&C application. Reference: IRCC.</span>
  },
  {
    question: <span>Test Case: A customer of Joseph pal has filed a complaint. Joseph pal is certain that he done everything correctly for his client and that they ultimately obtained their visa. True, the file took a little longer to complete, but Joseph pal completed all the forms accurately and wrote an excellent covering letter. Only once was the file returned, and that was because his assistant sent the application to the incorrect office. No, he did not inform the customer; nonetheless, this was not his responsibility. The customer was meant to deal only with him and refrain from contacting Immigration. Immigration informed the customer that the file had been forwarded to the incorrect office initially. Was the service maintained in terms of quality?</span>,
    answers: [
      <span>Yes, because Joseph pal sent the file to the right address.</span>,
      <span>No, because the file was not stored properly.</span>,
      <span>Yes, because the file got their visa in the end.</span>,
      <span>No, because Joseph pal did not keep the client informed properly.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: ABC Technology Inc., a Canadian firm headquartered in Edmonton, Alberta, Canada, has been awarded a new contract by the Government of Alberta to build and install a new information technology system for the province's payroll system. ABC is looking for someone with both IT and project management expertise. They have advertised widely and have not been successful in locating a suitable Canadian or permanent resident. They just filed an LMIA for a high-wage employment that was denied. You come upon the following:<br/>
    • Advertisements were posted in only two locations: a major newspaper and a recognized web service (ex monster, Workopolis)<br/>
    • Advertisements that ran for two weeks and ended four months previous to the LMIA submission.<br/>• The salary offered was less than the median pay - ABC's present project management team is on strike, and the individual chosen will take the position of the striking employee(s)<br/>
    • The employer failed to comply with the prior LMIA work permit holder's employment terms.<br/><br/>
    What is the greatest advise you could provide ABC in terms of preparing for a fresh LMIA application?</span>,
    answers: [
      <span>Advise them to submit a new LMIA application, after a new ad in the job bank.</span>,
      <span>Ensure the ads are properly placed, for the right length of time, with the appropriate wage listed.</span>,
      <span>Relist the ads for another two weeks to meet the 4-week requirement and then submit a new LMIA.</span>,
      <span>Advise the employer to settle the previous compliance issue and resolve the lab our strike before embarking on a new LMIA.</span>
    ],
    correct: 4,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is a 19-year-old Canadian permanent resident who just returned from an extended vacation in Eritrea. Her permanent resident card has run out, and she wants to return to Canada. She has spent three and a half years in Eritrea. She calls you to request that you file for a permanent residence card extension so that she may return to Canada. Question: What should Maria do in order to return to Canada?</span>,
    answers: [
      <span>She has to apply for a temporary resident visa to be able to return to Canada.</span>,
      <span>She has to apply to extend her permanent resident card at the visa post.</span>,
      <span>She has to apply for a travel document from the visa post to return to Canada.</span>,
      <span>She has to apply for permanent residence once again to return to Canada.</span>
    ],
    correct: 3,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>Test Case: Maria is a 29-year-old Canadian permanent resident who came with her family when she was only a few months old. She was a studious and hardworking young lady for the most of her life. She assisted her parents and siblings at home, worked part-time at a supermarket, and volunteered once a week at the local food bank. She got intimately connected with Joseph in the final several years, and she began abusing drugs and drinking excessively. She started stealing money from her parents and later from her job to pay for her medications. When her boss discovered out, he contacted the cops. She was accused with and convicted of stealing $5,000 or more. She was sentenced to two months in prison as well as probation. What are the guidelines regarding the types of evidence that may be offered during the hearing?</span>,
    answers: [
      <span>They can present forensic evidence gathered by counsel while preparing the case.</span>,
      <span>They can present any evidence that is true and relevant in the circumstances.</span>,
      <span>They can present prima facie evidence provided the Board Member allows it.</span>,
      <span>They can present testimonial evidence of Maria's friends and family.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  },
  {
    question: <span>The situation below is followed by three questions. Joseph was in Canada on a student visa. He had been in Canada for three years and fell in love with Maria, a Canadian citizen with whom he had a 14-month common-law relationship. He halted his studies and immediately started working full-time without obtaining a work permit. He applied to renew his study visa and, in order to demonstrate compliance, he presented forged paperwork. He was charged with deception and served with an order of exclusion. What legal recourse does Joseph have?</span>,
    answers: [
      <span>He can make an application for leave to appeal and judicial review within 30 days of receiving the removal order.</span>,
      <span>He can make an application for leave to appeal and judicial review within 15 days of receiving the removal order.</span>,
      <span>He can make an application to the Immigration Appeal Division within 60 days of receiving the removal order.</span>,
      <span>He can make an application to the Immigration Appeal Division within 30 days of receiving the removal order.</span>
    ],
    correct: 2,
    explanation: <span>Congrats!</span>
  }
];

export default QUESTION_DATA;
