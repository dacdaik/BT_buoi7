const ages = [3, 5, 44, 7, 33, 33, 17, 90, 8, 12, 3, 24, 120, 7, 100]; 
const ranges = [
    [7,15],
    [4,40],
    [11,125]
];
// Đếm số phần tử thỏa mãn của mảng ages với từng phần tử trong mảng ranges


for (var i = 0; i < ranges.length; i++){
    var abc = ages.filter(function(item){
        if(item > ranges[i][0] && item < ranges[i][1]){
            return item;
        }

    })
    console.log("mảng " + (i+1) + " có số phần tử thỏa mãn là " + (abc.length))
}