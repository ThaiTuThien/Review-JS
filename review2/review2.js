const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const diemTrungBinh = (diemToan, diemVan, diemAnh) => {
    return (diemToan + diemVan + diemAnh) / 3;
};


const xepLoai = (diemTB) => {
    if (diemTB >= 9) {
        return "Xuất sắc";
    }
    else if (diemTB >= 8 && diemTB < 9) {
        return "Giỏi";
    }
    else if (diemTB >= 6.5 && diemTB < 8) {
        return "Khá";
    }
    else {
        return "Trung bình";
    }
}

console.log(`Điểm trung bình: ${diemTrungBinh(diemToan, diemVan, diemAnh)}`);
console.log(`Xếp loại : ${xepLoai(diemTB)}`);