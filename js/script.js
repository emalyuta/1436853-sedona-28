var findHotelButton = document.querySelector(".find-hotel-button");
var findHotelForm = document.querySelector(".find-hotel-form");
var findHotelFormContainer = document.querySelector(".find-hotel-form-container");
var findHotelFormArrivalDate = document.querySelector(".arrival-date-input");
var findHotelFormDepartureDate = document.querySelector(".departure-date-input");
var findHotelFormAdultsCount = document.querySelector(".adults-counter-input");
var findHotelFormChildrenCount = document.querySelector(".children-counter-input");

findHotelForm.classList.remove("find-hotel-form-show");

findHotelButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  findHotelForm.classList.add("find-hotel-form-show");
});

findHotelForm.addEventListener("submit", function (evt) {
  if (!findHotelFormArrivalDate.value || !findHotelFormDepartureDate.value ||
      !findHotelFormAdultsCount.value || !findHotelFormChildrenCount.value) {
    evt.preventDefault();
    findHotelFormContainer.classList.remove("find-hotel-form-error");
    findHotelFormContainer.offsetWidth = findHotelFormContainer.offsetWidth;
    findHotelFormContainer.classList.add("find-hotel-form-error");
  }
});
