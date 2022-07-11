import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type DataChart = {
    productId: string;
    name: string;
    image: string;
    price: string;
}

export const addChart = (data: DataChart) => {
    const MySwal = withReactContent(Swal);

    const getPrev = localStorage.getItem("chart");
    if(!getPrev){
        localStorage.setItem("chart", JSON.stringify([data]));
        MySwal.fire({
            text: "Produk ditambahkan ke keranjang!",
            icon: "success"
        });
        window.location.reload()
    }else {
        const fProduct = JSON.parse(getPrev).map((x: any) => x.productId == data.productId);

        if(fProduct.length !== 0){
            MySwal.fire({
                text: "Produk sudah ada di keranjang",
                icon: "error"
            });
        }else {
            localStorage.setItem("chart", JSON.stringify([...JSON.parse(getPrev), data]));
            MySwal.fire({
                text: "Produk ditambahkan ke keranjang!",
                icon: "success"
            });
            window.location.reload()
        }
    }

}