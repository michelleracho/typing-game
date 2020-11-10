// source from family onwards: https://koreanly.com/most-common-korean-words/

const vocab = [
  { kr: '안녕하세요', en: 'Hello' },
  { kr: '주세요', en: 'Please' },
  { kr: '죄송합니다', en: 'Sorry' },
  { kr: '고맙습니다', en: 'Thank you ' },
  { kr: '네', en: 'Yes' },
  { kr: '아니요', en: 'No' },
  { kr: '아마도', en: 'Maybe' },
  { kr: '저기요', en: 'Excuse me' },
  // family
  { kr: '엄마', en: 'Mom (informal)' },
  { kr: '어머니', en: 'Mother (formal)' },
  { kr: '아빠', en: 'Dad (informal)' },
  { kr: '아버지', en: 'Father (formal)' },
  { kr: '누나', en: 'Older sister (if you are male)' },
  { kr: '언니', en: 'Older sister (if you are female)' },
  { kr: '형', en: 'Older brother (if you are male)' },
  { kr: '오빠', en: 'Older brother (if you are female)' },
  { kr: '동생', en: 'Younger sibling' },
  { kr: '남동생', en: 'Younger brother' },
  { kr: '여동생', en: 'Younger sister' },
  { kr: '형제', en: 'Brothers' },
  { kr: '자매', en: 'Sisters' },
  { kr: '남매', en: 'Brother and Sister' },
  { kr: '남편', en: 'Husband' },
  { kr: '아내', en: 'Wife' },
  { kr: '부부', en: 'Married couple' },
  { kr: '아들', en: 'Son' },
  { kr: '딸', en: 'Daughter' },
  { kr: '쌍둥이', en: 'Twins' },
  { kr: '세 쌍둥이', en: 'Triplets' },
  { kr: '삼촌', en: 'Uncle' },
  { kr: '이모', en: 'Aunt' },
  { kr: '할아버지', en: 'Grandfather' },
  { kr: '할머니', en: 'Grandmother' },
  { kr: '가족', en: 'Family' },
  // love
  { kr: '사람', en: 'Human' },
  { kr: '사랑', en: 'Love' },
  { kr: '첫사랑', en: 'First love' },
  { kr: '짝사랑', en: 'Secret crush' },
  { kr: '남자', en: 'Boy' },
  { kr: '여자', en: 'Girl' },
  { kr: '친구', en: 'Friend' },
  { kr: '남자친구', en: 'Boyfriend' },
  { kr: '여자친구', en: 'Girlfriend' },
  { kr: '삼각관계', en: 'Love triangle' },
  { kr: '데이트', en: 'Date' },
  { kr: '소개팅', en: 'Blind date' },
  { kr: '커플', en: 'Couple' },
  { kr: '결혼', en: 'Marriage' },
  { kr: '연애편지', en: 'Love letter' },
  { kr: '드라마', en: 'Drama' },
  { kr: '배우', en: 'Actor' },
  { kr: '여배우', en: 'Actress' },
  { kr: '싫어', en: 'Hate' },
  { kr: '감추다', en: 'Hide' },
  { kr: '감독', en: 'Director' },
  { kr: '영화', en: 'Film' },
  // time
  { kr: '언제', en: 'When' },
  { kr: '지금', en: 'Now' },
  { kr: '이제', en: 'Now' },
  { kr: '현재', en: 'Present tense, now' },
  { kr: '곧', en: 'Soon, At once' },
  { kr: '때때로', en: 'Sometimes' },
  { kr: '언젠가', en: 'Some time' },
  { kr: '그때', en: 'That time' },
  { kr: '결코', en: 'Never' },
  { kr: '아직', en: 'Yet' },
  { kr: '아직', en: 'Still' },
  { kr: '여기', en: 'Here' },
  { kr: '거기', en: 'There' },
  { kr: '저기', en: 'Over there' },
  { kr: '한번', en: 'Once' },
  { kr: '두번', en: 'Twice' },
  { kr: '자주', en: 'Often' },
  { kr: '계속', en: 'Continuously' },
  { kr: '늘', en: 'Always' },
  { kr: '가끔', en: 'Sometimes' },
  { kr: '때때로', en: 'Occasionally' },
  { kr: '종종', en: 'Occasionally' },
  { kr: '아주', en: 'Very' },
  { kr: '잘', en: 'Well' },
  { kr: '대단히', en: 'Very' },
  { kr: '완전히', en: 'Perfectly' },
  { kr: '굉장히', en: 'Very much' },
  { kr: '단순히', en: 'SimplY' },
  { kr: '매우', en: 'Very' },
  { kr: '상당히', en: 'Very' },
  { kr: '너무', en: 'Too' },
  { kr: '더', en: 'More' },
  { kr: '덜', en: 'Less' },
  { kr: '엄청', en: 'Enormously' },
  { kr: '불과', en: 'Only' },
  { kr: '제일', en: 'The first' },
  { kr: '마구', en: 'At random' },
  { kr: '절대로', en: 'Absolutely' },
  { kr: '무려', en: 'As many as' },
  { kr: '얼마나', en: 'How much' },
  { kr: '몇이나', en: 'How many' },
  { kr: '어느', en: 'Which' },
  { kr: '누가', en: 'Who' },
  { kr: '어디서', en: 'Where' },
  { kr: '어떻게', en: 'How' },
  { kr: '언제', en: 'When' },
  { kr: '무엇을', en: 'What' },
  { kr: '왜', en: 'Why' },
  // external body parts
  { kr: '신체 부분', en: 'Body Parts' },
  { kr: '피부', en: 'Skin' },
  { kr: '살갗', en: 'Skin' },
  { kr: '신체', en: 'Body' },
  { kr: '몸', en: 'Body' },
  { kr: '머리', en: 'Head' },
  { kr: '머리카락', en: 'Hair' },
  { kr: '얼굴', en: 'Face' },
  { kr: '보조개', en: 'Dimple' },
  { kr: '이마', en: 'Forehead' },
  { kr: '눈', en: 'Eye' },
  { kr: '눈썹', en: 'Eyebrow' },
  { kr: '눈꺼풀', en: 'Eyelid' },
  { kr: '속눈썹', en: 'Eyelashes' },
  { kr: '눈동자', en: 'Pupil' },
  { kr: '귀', en: 'Ear' },
  { kr: '볼', en: 'Cheek' },
  { kr: '뺨', en: 'Cheek' },
  { kr: '코', en: 'Nose' },
  { kr: '콧구멍', en: 'Nostrils' },
  { kr: '입', en: 'Mouth' },
  { kr: '이', en: 'Tooth' },
  { kr: '이빨', en: 'Teeth' },
  { kr: '입술', en: 'Lips' },
  { kr: '잇몸', en: 'Gums' },
  { kr: '혀', en: 'Tongue' },
  { kr: '턱', en: 'Chin' },
  { kr: '목	', en: 'Neck' },
  { kr: '목구멍', en: 'Throat' },
  { kr: '목', en: 'Throat' },
  { kr: '어깨', en: 'Shoulder' },
  { kr: '가슴', en: 'Chest' },
  { kr: '등', en: 'Back' },
  { kr: '배', en: 'Abdomen' },
  { kr: '배꼽', en: 'Navel' },
  { kr: '허리', en: 'Waist' },
  { kr: '엉덩이', en: 'Buttocks' },
  { kr: '손', en: 'Hand' },
  { kr: '팔', en: 'Arm' },
  { kr: '팔목', en: 'Wrist' },
  { kr: '손목', en: 'Wrist' },
  { kr: '팔꿈치', en: 'Elbow' },
  { kr: '손바닥', en: 'Palm (hand)' },
  { kr: '주먹', en: 'Fist' },
  { kr: '손가락', en: 'Finger' },
  { kr: '엄지', en: 'Thumb' },
  { kr: '검지', en: 'Index finger' },
  { kr: '약지', en: 'Ring finger' },
  { kr: '손톱', en: 'Fingernail' },
  { kr: '겨드랑이', en: 'Armpit' },
  { kr: '다리', en: 'Leg' },
  { kr: '허벅지', en: 'Thigh' },
  { kr: '무릎', en: 'Knee' },
  { kr: '발', en: 'Foot' },
  { kr: '발톱', en: 'Claw' },
  { kr: '발목', en: 'Ankle' },
  { kr: '발톱', en: 'Toenail' },
  { kr: '뒤꿈치', en: 'Heel' },
  { kr: '발가락', en: 'Toe' },
  // internal body parts
  { kr: '뇌', en: 'Brain' },
  { kr: '심장', en: 'Heart' },
  { kr: '혈관', en: 'Artery' },
  { kr: '간', en: 'Liver' },
  { kr: '폐', en: 'Lungs' },
  { kr: '근육', en: 'Muscles' },
  { kr: '뼈', en: 'Bone' },
  { kr: '위', en: 'Stomach' },
  { kr: '맹장', en: 'Appendix' },
  { kr: '콩팥', en: 'Kidney' },
  { kr: '췌장 ', en: 'Pancreas' },
  { kr: '자궁', en: 'Womb' },
  // medical
  { kr: '의사', en: 'Doctor' },
  { kr: '간호사', en: 'Nurse' },
  { kr: '주사', en: 'Injection' },
  { kr: '약사', en: 'Pharmacist' },
  { kr: '약', en: 'Medicine' },
  { kr: '암', en: 'Cancer ' },
  { kr: '기침', en: 'Cough ' },
  { kr: '독감', en: 'Flu ' },
  { kr: '종양', en: 'Tumor ' },
  { kr: '구토', en: 'Vomiting ' },
  { kr: '마비', en: 'Paralysis ' },
  { kr: '중독', en: 'Poisoning ' },
  { kr: '치통', en: 'Toothache ' },
  { kr: '복통', en: 'Stomachache ' },
  { kr: '변비', en: 'Constipation ' },
  { kr: '황달', en: 'Jaundice ' },
  { kr: '콧물', en: 'Runny nose' },
  { kr: '고열', en: 'High fever' },
  { kr: '임신', en: 'Pregnancy' },
  { kr: '출산', en: 'Childbirth' },
  { kr: '낙태', en: 'Abortion' },
  { kr: '수술', en: 'Operation' },
  { kr: '입원', en: 'Hospitalization' },
  { kr: '퇴원', en: 'Hospital discharge' },
  { kr: '당뇨병', en: 'Diabetes' },
  { kr: '일사병', en: 'Sunstroke' },
  { kr: '위궤양', en: 'Gastric ulcer' },
  { kr: '증후군', en: 'Syndrome' },
  { kr: '고혈압', en: 'High blood pressure' },
  { kr: '저혈압', en: 'Low blood pressure' },
  { kr: '영양실조', en: 'Malnutrition' },
  { kr: '임종', en: 'Death' },
  { kr: '사망', en: 'Death' },
  { kr: '병', en: 'Sickness' },
  { kr: '처방', en: 'Prescription' },
  { kr: '피부과', en: 'Dermatology' },
  { kr: '소아과', en: 'Paediatrics' },
  { kr: '초음파', en: 'Ultrasound' },
  { kr: '신경과', en: 'Neurology' },
  { kr: '진료실', en: 'Consultation room' },
  { kr: '응급실', en: 'Emergency room' },
  { kr: '성형외과', en: 'Plastic surgery' }
];
