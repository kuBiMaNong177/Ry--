import axios from 'axios'

const instance=axios.create

export function grt(url,params){
    return instance.get(url,params)
}