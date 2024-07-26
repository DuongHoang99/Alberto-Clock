import './Product3.css'
export default function Product3({ id, name, gender, pict, pict2, price }) {
    
    const url = process.env.PUBLIC_URL + '/';  // "http://localhost:3000/";
    return (
        <>
            <div className='container1'>
                <img src={url + pict} className='image' style={{ marginTop: "20px" }} />

                <div className='overlay'>
                    <img src={url + pict2} className='img2' />
                </div>
            </div>
            <div>
                Id: {id} <br />
                Name: {name} <br />
                Gender: {gender} <br />
                Price: {price} <br />

            </div>
        </>
    );

}