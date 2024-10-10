let points = 0; // ইউজারের পয়েন্ট

document.getElementById('coupon-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const couponCode = document.getElementById('coupon-code').value;

    // এডমিনের কুপন কোড চেক করতে এখানে একটি ফাংশন কল করুন (এটি সিম্পল প্রোটোটাইপ)
    if (checkCouponCode(couponCode)) {
        points += 2; // পয়েন্ট যোগ করুন
        document.getElementById('points-display').innerText = আপনার পয়েন্ট: ${points};
    } else {
        alert('কুপন কোডটি সঠিক নয়।');
    }
});

// কুপন কোড চেক করার ফাংশন
function checkCouponCode(code) {
    // এডমিনের কুপন কোড দিয়ে তুলনা করুন
    const adminCouponCode = "ADMINCODE"; // উদাহরণ কুপন কোড
    return code === adminCouponCode;
}