import {Component} from 'react'
import ProductCard from '../ProductCard'
import './index.css'
const productsList=[
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250,
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__',
        name:"Monsterra",
        description:"indoor plant low maintnanace ",
        price:250
    },


    
]

class Home extends Component{
    state={serachInput:''}
    onChangeInput=(e)=>{
        this.setState({serachInput:e.target.value})
    }

    onSerachResults=()=>{
        const{serachInput}=this.state
        return productsList.filter((each)=>(each.name.includes(serachInput)))
    }

    render(){
        console.log(productsList)
        const filterdList=this.onSerachResults()
        return(
             <div className='mainContainer'>
                <div className='imgContainer'>
                <img src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__" className='lImage' alt="logo"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dxw4t4ulTQrZeEsoh7ue8ducjjVSiZEuIotkbZ8ZADjv6gpRSWycvvEKHhD27Fl9Xy4&usqp=CAU" className='profile' alt="proloogo"/>
                <img src="data:image/png;base64,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" className='profile' alt="cart logo"/>
                </div>
                <div className='logocon'>
                <input type="text" onChange={this.onChangeInput} placeholder='serachYour Product'/>    
                </div>
                <div className='products'>
                    <ul>
                        {filterdList.map((eachProduct)=>(
                            <ProductCard eachProduct={eachProduct}/>
                        ))}
                    </ul>
                </div>
             </div>   
        )
    }
}
export default Home