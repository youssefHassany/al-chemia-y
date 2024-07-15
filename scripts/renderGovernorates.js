const governoratesEgypt = [
  "القاهرة",
  "الإسكندرية",
  "السويس",
  "الإسماعيلية",
  "أسوان",
  "أسيوط",
  "البحر الأحمر",
  "البحيرة",
  "بني سويف",
  "بورسعيد",
  "جنوب سيناء",
  "دمياط",
  "الفيوم",
  "الغربية",
  "القليوبية",
  "الإسكندرية",
  "كفر الشيخ",
  "مطروح",
  "المنوفية",
  "المنيا",
  "الوادي الجديد",
  "شمال سيناء",
  "قنا",
  "سوهاج",
];

const dropdown = document.getElementById("governorates-dropdown");

const renderGovernorates = () => {
  governoratesEgypt.forEach((governorate) => {
    const option = document.createElement("option");
    option.innerHTML = governorate;
    dropdown.appendChild(option);
  });
};

renderGovernorates();
