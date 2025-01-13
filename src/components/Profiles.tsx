

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data: any){
    return (

        <>
            {
                data.map((value: any, index: any) => (
                    <div className="pt-5" key={index}>
                        <div className="item">
                            <img className='rounded-full' src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}


