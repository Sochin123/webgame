document.getElementById('admin-coupon-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const adminCouponCode = document.getElementById('admin-coupon-code').value;

    // এখানে কুপন কোড সংরক্ষণ বা ব্যবস্থাপনা করার লজিক যোগ করুন
    alert(কুপন কোড ${adminCouponCode} সফলভাবে সংরক্ষিত হয়েছে!);
});