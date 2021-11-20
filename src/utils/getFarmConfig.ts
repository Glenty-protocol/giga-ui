import { farmsConfig } from 'config/constants'

const getFarmConfig = (id: number) => farmsConfig.find((f) => f.id === id)

export default getFarmConfig
