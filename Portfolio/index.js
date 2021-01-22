// 摂南HPページ遷移の確認
const res1=confirm("https://www.setsunan.ac.jp/へアクセスしますか？");

function accessCheck1() {
    if(res==true) {
        window.location.href="https://www.setsunan.ac.jp/";
    }
    else {
        // キャンセル ===> 非表示
    }
}
console.log(accessCheck1(""));
window.open("https://www.setsunan.ac.jp/");


// PBジムHPへページ遷移の確認
const res2=confirm("https://pbsc.jp/へアクセスしますか？");

function accessCheck2() {
    if(res==true) {
        window.location.href="https://pbsc.jp/" ;
    }
    else {
        // キャンセル ===> 非表示
    }
}
console.log(accessCheck2(""));
window.open("https://pbsc.jp/");

