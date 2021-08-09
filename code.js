"use strict";

// functions

let update_Pageviews = (index, arr) => {
    Pageviews.innerText = arr[index].pageviews;
};

let update_perMonth = (index, arr) => {
    perMonth.innerText = `$ ${arr[index].cost}.00`;
};

let update_perMonth_discount = (index, arr) => {
    perMonth.innerText = `$ ${arr[index]}.00`;
};

let updateSwitch = (flag, index, arr) => {
    if (flag === true) {
        let discoutValues = arr.map((item) => { return item.cost * .25 });
        update_perMonth_discount(index, discoutValues);
    }
    else {
        update_perMonth(index, arr);
    }
}
//

let offers = [
    { pageviews: "10K", cost: 8 },
    { pageviews: "50K", cost: 12 },
    { pageviews: "100K", cost: 16 },
    { pageviews: "500K", cost: 24 },
    { pageviews: "1M", cost: 36 },
];

let slider = document.getElementById("slider");

let Pageviews = document.getElementById("Pageviews-js");

let perMonth = document.getElementById("perMonth-js");

let discountToggle = document.getElementById("toggle-js");

//default state
update_Pageviews(slider.value, offers);
update_perMonth(slider.value, offers);
updateSwitch(discountToggle.checked, slider.value, offers);

//event listners
discountToggle.addEventListener("change", (e) => {
    updateSwitch(e.target.checked, slider.value, offers);
});

slider.addEventListener("change", (e) => {
    update_Pageviews(e.target.value, offers);
    update_perMonth(e.target.value, offers);
    updateSwitch(discountToggle.checked, e.target.value, offers);
});
