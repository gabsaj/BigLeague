import { Player } from "../types/Player";
import { BaseService } from "./baseService";

export default class PlayerService extends BaseService {
  /* 
    getplayers
    */
  async getPlayers(): Promise<Player[]> {
    const response = await this.instance.get("players");
    return response.data;
  }

  async createPlayer(data: Player) {
    const response = await this.instance.post("players/", data);
    return response;
  }

  async fetchPlayerById(id: string): Promise<Player> {
    const response = await this.instance.get(`players/${id}`);
    return response.data;
  }
}
