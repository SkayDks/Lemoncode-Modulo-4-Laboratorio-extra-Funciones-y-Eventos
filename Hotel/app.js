const priceRoomSize = { individual: -0.25, doble: 0, triple: 0.25 };
const priceRoomType = { standard: 100, junior: 120, suite: 150 };
const priceSpa = 20;
const room = {
  roomType: null,
  spa: 0,
  roomSize: null,
  roomNight: 0,
  parkingNight: 0,
};

let priceParkingNight = (num) => num * 10;
let calculatePriceRoom = (spa, price, num) => (spa + price) * num;
let priceTotal = (pRoom, parking) => pRoom + parking * 10;

function selectRoomType(pRoom) {
  switch (pRoom) {
    case "standard":
      return priceRoomType.standard;
    case "junior":
      return priceRoomType.junior;
    case "suite":
      return priceRoomType.suite;
  }
}

function selectRoomSize(pRoom) {
  switch (pRoom) {
    case "individual":
      return priceRoomSize.individual;
    case "doble":
      return priceRoomSize.doble;
    case "triple":
      return priceRoomSize.triple;
  }
}

function changeRoom(e) {
  switch (e.target.id) {
    case "roomType":
      room.roomType = selectRoomType(e.target.value);
      break;
    case "spa":
      room.spa = e.target.checked ? priceSpa : 0;
      break;
    case "roomSize":
      room.roomSize = selectRoomSize(e.target.value);
      break;
    case "roomNight":
      room.roomNight = parseInt(e.target.value);
      break;
    case "parkingNight":
      room.parkingNight = parseInt(e.target.value);
      break;
    default:
      break;
  }
}

function calculatePrice(pRoom) {
  let priceRoom = calculatePriceRoom(
    pRoom.spa,
    pRoom.roomType,
    pRoom.roomNight
  );
   priceRoom += priceRoom * pRoom.roomSize;
  return priceTotal(priceRoom, pRoom.parkingNight);
}

function handleChangeForm(e) {
  changeRoom(e);
  if (room.roomType !== null && room.roomSize !== null && !isNaN(room.roomNight)&& !isNaN(room.parkingNight))
    total = "El total es: " + calculatePrice(room)+ "€";
  else total = "Falta selecionar algun elemento";

  document.querySelector(".result").innerHTML = total;
}

document
  .querySelector("#roomType")
  .addEventListener("change", handleChangeForm);
document.querySelector("#spa").addEventListener("change", handleChangeForm);
document
  .querySelector("#roomSize")
  .addEventListener("change", handleChangeForm);
document
  .querySelector("#roomNight")
  .addEventListener("change", handleChangeForm);
document
  .querySelector("#parkingNight")
  .addEventListener("change", handleChangeForm);
document
  .querySelector("#roomNight")
  .addEventListener("keyup", handleChangeForm);
document
  .querySelector("#parkingNight")
  .addEventListener("keyup", handleChangeForm);
