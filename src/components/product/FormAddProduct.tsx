import { Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Url from '../../libs/url';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2'

type Props = {}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Bank Bca',
  'Bank Bni',
  'Bank Bri',
];

const FormAddProduct = (props: Props) => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [tokenLogin, setTokenLogin] = useState("");
  
  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageProduct, setimageProduct] = useState<any>(null);
  const [methodPayment, setMethodPayment] = React.useState<string[]>([]);
  const [accountNumberBni, setAccountNumberBni] = useState("");
  const [accountNumberBri, setAccountNumberBri] = useState("");
  const [accountNumberBca, setAccountNumberBca] = useState("");
  
  const [dataCategory, setDataCategory] = useState([]);

  const handleChange = (event: SelectChangeEvent<typeof methodPayment>) => {
    const {
      target: { value },
    } = event;
    setMethodPayment(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
    const tokenLogStorage = localStorage.getItem("tokenLogin");
    if(tokenLogStorage){
      setTokenLogin(tokenLogStorage)
    }else{
      navigate("/")
    }
  }, [tokenLogin])

  useEffect(() => {
    const fetchCategory = async() => {
      const x = await fetch(`${Url.apiUrl}/product/get-category`).then(r => r.json());
      setDataCategory(x);
    }
    fetchCategory()
  }, [])
  
  const requestAddProduct = async() => {
    if(imageProduct && nameProduct && price && description && category){
      const pMethod = [
        {
          id: 1,
          account_number: accountNumberBca
        },
        {
          id: 2,
          account_number: accountNumberBni
        },
        {
          id: 3,
          account_number: accountNumberBri
        },
  
      ]
      const fPMethod =  pMethod.filter(function(val) {
        return val.account_number !== "";
      });
      
      if(fPMethod.length === 0){
        MySwal.fire({
          text: "Tambahkan metode pembayaran!",
          icon: "error"
        });
      }else {
        const fAddProduct = await fetch(`${Url.apiUrl}/management/add-product`, {
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${tokenLogin}`
          },
          body: JSON.stringify({
            name: nameProduct,
            price: price,
            description: description,
            categoryId: category,
            paymentMethod: fPMethod
          })
        }).then(async(r) => {
          if(r.status == 200){
            MySwal.fire({
              text: "Sukses manambahkan produk!",
              icon: "success"
            });
            const val = await r.json();
            if(imageProduct){
              await requestUploadImageProduct(val.data.id)
            }
          }else {
            MySwal.fire({
              text: "Gagal menambahkan produk!",
              icon: "error"
            });
          }
          return r
        })
      }
    }else {
      MySwal.fire({
        text: "Harap isi semua form yang dibutuhkan!",
        icon: "error"
      });
    }

  };

  const requestUploadImageProduct = async(productId: string | number) => {
    const formData = new FormData();
		formData.append('image', imageProduct[0]);

    const fUpload = await fetch(`${Url.apiUrl}/product/upload-product-image/${productId}`, {
      method: "post",
      headers: {
        "Authorization": `Bearer ${tokenLogin}`
      },
      body: formData
    }).then(r => {
      if(r.status === 200){
        setTimeout(() => {
          MySwal.fire({
            text: "Sukses upload image produk!",
            icon: "success"
          });
        }, 2000)
      }else {
        setTimeout(() => {
          MySwal.fire({
            text: "Gagal upload image produk!",
            icon: "error"
          });
        }, 2000);
      }
    });
  }


  return (
    <React.Fragment>
      <div className="row">
          <div className="col-12 mb-4">
            <h4 className="text-center">Tambah Produk</h4>
              <div className="card border-0 shadow components-section mt-4">
                  <div className="card-body">     
                      <div style={{display: "flex", justifyContent: "center"}} className="row mb-4">
                          <div className="col-lg-6 col-sm-6">
                              {/* <!-- Form --> */}
                              <div className="mb-4">
                                  <label htmlFor="name">Nama produk</label>
                                  <input onChange={(e) => {
                                    setNameProduct(e.target.value)
                                  }} type="text" className="form-control" id="name"/>
                                  {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                              </div>
                              <div className="mb-4">
                                  <label htmlFor="price">Harga produk</label>
                                  <input onChange={(e) => {
                                    setPrice(e.target.value)
                                  }} type="number" className="form-control" id="price"/>
                                  {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                              </div>
                              {/* <!-- End of Form --> */}
                              <div className="mb-3">
                                  <label htmlFor="textarea">Deskripsi produk</label>
                                  <textarea onChange={(e) => {
                                    setDescription(e.target.value)
                                  }} style={{height: 150}} className="form-control" placeholder="Masukkan deskripsi...." id="textarea" ></textarea>
                              </div>

                          </div>
                          
                          <div className="col-lg-6 col-sm-6">
                              <div className="mb-3">
                                <label className="my-1 me-2" htmlFor="catgory">Kategori Produk</label>
                                <select onChange={(e) => {
                                  setCategory(e.target.value)
                                }} className="form-select" id="catgory" aria-label="Default select example">
                                    <option selected>Pilih Kategori</option>
                                    {
                                      dataCategory.map((data: any) => (
                                        <option value={`${data.id}`}>{data.name}</option>
                                      ))
                                    }
                                </select>
                              </div>
                              <div className="mb-3" style={{display: "flex", flexDirection: "column"}}>
                                  <label className="my-1 me-2" htmlFor="country">Metode pembayaran</label>
                                  <FormControl sx={{ m: 1, }}>
                                    <Select
                                      labelId="demo-multiple-chip-label"
                                      id="demo-multiple-chip"
                                      multiple
                                      value={methodPayment}
                                      onChange={handleChange}
                                      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                      renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                          {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                          ))}
                                        </Box>
                                      )}
                                      MenuProps={MenuProps}
                                    >
                                      {names.map((name) => (
                                        <MenuItem
                                          key={name}
                                          value={name}
                                        >
                                          {name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                              </div>
                              { methodPayment.map((payment) => (
                                <div className="mb-4">
                                    <label htmlFor="name">Nomor rekening ({payment})</label>
                                    <input onChange={(e) => {
                                      if(payment === "Bank Bni"){
                                        setAccountNumberBni(e.target.value)
                                      }else if(payment === "Bank Bca"){
                                        setAccountNumberBca(e.target.value)
                                      }else if(payment === "Bank Bri"){
                                        setAccountNumberBri(e.target.value)
                                      }
                                    }} type="number" className="form-control" id="name"/>
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                ))
                              }

                              <div className="mb-3">
                                  <label htmlFor="formFile" className="form-label">Foto produk</label>
                                  <input onChange={(e) => {
                                    setimageProduct(e.target.files)
                                  }} accept="image/*" className="form-control" type="file" id="formFile" />
                              </div>
                              
                          </div>
                          <button onClick={() => {
                            requestAddProduct();
                          }} style={{maxWidth: 200}} className="btn btn-tertiary" type="button">Tambah Produk</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default FormAddProduct