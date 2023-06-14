import { useEffect, render, useState } from "@wordpress/element"; // Import the render function from wordpress
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

// Here I created a simple random number generator
const RandomNumberDashboardWidget = () => {

    const date = new Date();

    // 1. Pobrać wszystkie kupony, które są jeszcze aktualne i przypisać je do tablicy coupons. Pobieramy kupony z data miesiac do tylu.
    // 2. Sprawdzic kod ostatnich dwoch/trzech kuponow
    //    - pobrac ostatni obiekt coupon
    //    - sprawdzic jaki je

    // *
    // State
    // *
    const [coupons, setCoupons] = useState([]);
    const [couponCodes, setCouponCodes] = useState([])

    // *
    // Pobranie ostatnich kuponow ze sklepu
    // *
    useEffect(() => {
        // console.log("RENDER * USE EFFECT * POBRANIE KUPONOW")
        const fetchData = async () => {
            // Pobranie kuponow na miesiac do tylu, ale domyslnie pobiera tylko 10 sztuk
            // 
            // const today = new Date();
            // today.setMonth(today.getMonth() - 1);
            // const params = { after: today.toISOString() }
            // apiFetch({ path: addQueryArgs('/wc/v3/coupons', params) }).then((fetchedCoupons) => setCoupons(fetchedCoupons));

            apiFetch({ path: '/wc/v3/coupons' }).then((fetchedCoupons) =>
                setCoupons(fetchedCoupons)

            );

        }
        fetchData().catch(console.error)
    }, coupons);

    // *
    // Przypisanie samych kodow kuponow
    // *
    useEffect(() => {
        const newCoupons = coupons.map(coupon => coupon.code);
        setCouponCodes((prevCoupons) => [...prevCoupons, ...newCoupons]);
    }, [coupons])

    // *
    // Wyswietlenie kodow kuponow
    // *
    useEffect(() => {
        console.log("kody: ", couponCodes)
    }, [couponCodes]);

    const lastCoupon = () => {

        // console.log("RENDER * LAST COUPON CODE * SPRAWDZENIE KUPONOW")

        const length = coupons.length;

        // console.log(coupons[length - 1]);

        const lastCoupon = coupons[length - 1];

        // console.log("ostatni:", lastCoupon)

        if (lastCoupon) {

            // setArray(oldArray => [...oldArray, newValue]);

            // coupons.map(coupon => setCouponCodes(...couponCodes, coupon.code));



            const newValues = coupons.map(coupon => coupon.code);

            // console.log("wartosci: ", newValues);

            // console.log("set");

            // addCouponsCodes();
            // console.log("kupony:", couponCodes)


            // setCouponCodes(prevCouponCodes => [...prevCouponCodes, newValues]);

            // setCouponCodes(newValues)

            // lastCoupon.amount = 15;
            // console.log("ustawiony:", lastCoupon)

            // const lastCouponCode = lastCoupon.code;
            // console.log(lastCouponCode)

        }

        // lastCoupon.amount = 15;


    }

    // const test = () => {
    //     coupons.map(coupon => console.log(coupon.code));
    // }



    const randomNumber = Math.floor(Math.random() * 100);

    const couponData = {

        "code": "testKOD",
        "amount": "10",
        "discount_type": "percent",
        "description": "generated coupon - description",
        "date_expires": "2023-06-28",
        "individual_use": true,
        "exclude_sale_items": true,
        "usage_limit": 1,

    }


    // apiFetch({
    //     path: '/wc/v3/coupons',
    //     method: 'POST',
    //     data: couponData
    // }).then((res) => {
    //     console.log(res);
    // });


    // return the random number in a <p> tag
    return (
        <div>
            {lastCoupon()}
            <p>Random number: {randomNumber}</p>
            {/* <p>Last coupon: {lastCoupon()}</p> */}
        </div>
    );
};

document.addEventListener("DOMContentLoaded", () => {
    // Get the widget id, which we set in the .php file when running wp_add_dashboard_widget
    const widgetContainer = document.getElementById("random-number-dashboard-widget");
    // If that dashboard widget exists
    if (widgetContainer) {
        // Use the wordpress render function to render out the RandomNumberDashboardWidget function's output, and append it to the widget container
        render(<RandomNumberDashboardWidget />, widgetContainer);
    }
});