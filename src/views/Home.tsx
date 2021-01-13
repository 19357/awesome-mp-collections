import { useEffect, useState } from "react"

type TResponseItem = {
  title: string,
  list: {
    name: string,
    link: string,
    origin?: string
  }[]
}

type TResponse = {
  [key: string]: TResponseItem
}

const REFURL = 'https://public-data-1254963092.cos.ap-beijing.myqcloud.com/ref_list.json'

export default function Home(){
  const [list, setList] = useState<TResponse>({})

  useEffect(() => {
    async function getJson() {
      let res = await fetch(REFURL)
      let data: TResponse = await res.json()
      setList(data)
    }
    getJson()
  }, [])
  return (
    <div className="home">
      <h3 className="text-center mb-3">微信小程序教程参考</h3>
      {
        Object.keys(list).map((item, index) => (
          <div className="card h5 mb-5 text-white bg-info" key={index}>
            <div className="card-header">
              {list[item].title}
            </div>
            <ul className="list-group list-group-flush">
              {
                list[item].list.map((subItem) => (
                  <li className="list-group-item" key={subItem.link}>
                    <a href={subItem.link} target="_blank" rel="noreferrer">{subItem.name}</a>
                    {
                      subItem.origin
                      ? <span className="badge badge-info ml-3">{subItem.origin}</span>
                      : null
                    }
                  </li>
                ))
              }
            </ul>
        </div>
        ))
      }
    </div>
  )
}