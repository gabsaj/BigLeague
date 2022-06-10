import { Player } from "../types/Player";
import { BaseService } from "./baseService";

export default class PlayerService extends BaseService {
  // Get Players

  async getPlayers(): Promise<Player[]> {
    const response = await this.instance.get("players");
    return response.data;
  }

  //Create player

  async createPlayer(data: Player) {
    const response = await this.instance.post("players/", data);
    return response;
  }

  //Fetch player by id

  async fetchPlayerById(id: string): Promise<Player> {
    const response = await this.instance.get(`players/${id}`);
    return response.data;
  }
}
