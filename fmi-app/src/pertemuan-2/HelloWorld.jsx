export default function HelloWorld() {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai />
            <QuoteText />
            <UserCard nama="Cinta" 
                nim="2455301040" 
                tanggal={new Date().toLocaleDateString()}
            />
            <UserCard nama="Cinta" 
                nim="2455301040" 
                tanggal="2006-06-11"
            />
            <img src="img/pcr logo.jpg" alt="logo" />
        </div>
    )
}

function GreetingBinjai() {
    return (
        <div>
            <h2>Salam dari Binjai</h2>
            <p>Semoga sukses selalu</p>
        </div>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props) {
    return (
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}