function scrollToGiongGia() {
    const giongGiaElement = document.querySelector('.about-meeting-price');
    giongGiaElement.scrollIntoView({ behavior: 'smooth' });
}
function scrollToEvenPrice() {
    const giongGiaElement = document.querySelector('.event-price');
    giongGiaElement.scrollIntoView({ behavior: 'smooth' });
}
function scrollToBooking() {
    const giongGiaElement = document.querySelector('.booking-form');
    giongGiaElement.scrollIntoView({ behavior: 'smooth' });
}
// tính giá phòng


document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Tính toán giá tiền dựa vào loại phòng và số giờ thuê
    const roomType = document.getElementById('roomType').value;
    const hours = parseInt(document.getElementById('hours').value, 10);
    let estimatedPrice = 0;

    if (roomType === 'giong gia') {
        estimatedPrice = 500000 + (hours - 1) * 300000;
    } else if (roomType === 'nang can') {
        estimatedPrice = 700000 + (hours - 1) * 450000;
    }

    document.getElementById('estimatedPrice').value = estimatedPrice.toLocaleString('vi-VN') + ' VND';

    // Hiển thị thông báo và reset form
    alert('Thông tin của bạn đã được ghi lại thành công, chúng tôi sẽ sớm liên hệ lại với bạn để xác nhận và thanh toán. Cám ơn bạn đã tin tưởng dịch vụ tại Gióng');

    // Reset form về trạng thái ban đầu
    document.getElementById('bookingForm').reset();
    document.getElementById('estimatedPrice').value = '';
});

document.getElementById('hours').addEventListener('change', function () {
    // Tính toán giá tiền dựa vào loại phòng và số giờ thuê
    const roomType = document.getElementById('roomType').value;
    const hours = parseInt(document.getElementById('hours').value, 10);
    let estimatedPrice = 0;

    if (roomType === 'giong gia') {
        estimatedPrice = 500000 + (hours - 1) * 300000;
    } else if (roomType === 'nang can') {
        estimatedPrice = 700000 + (hours - 1) * 450000;
    }

    document.getElementById('estimatedPrice').value = estimatedPrice.toLocaleString('vi-VN') + ' VND';
});

document.getElementById('roomType').addEventListener('change', function () {
    // Tính toán lại giá tiền khi loại phòng thay đổi
    const hours = parseInt(document.getElementById('hours').value, 10);
    const roomType = document.getElementById('roomType').value;
    let estimatedPrice = 0;

    if (roomType === 'giong gia') {
        estimatedPrice = 500000 + (hours - 1) * 300000;
    } else if (roomType === 'nang can') {
        estimatedPrice = 700000 + (hours - 1) * 450000;
    }

    document.getElementById('estimatedPrice').value = estimatedPrice.toLocaleString('vi-VN') + ' VND';
});
