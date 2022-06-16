import { Player } from "../types/Player";
import { BaseService } from "./baseService";

export default class PlayerService extends BaseService {
  // Get Players

  async getPlayers(
    sort: string,
    limit: number,
    sortDirection?: string
  ): Promise<Player[]> {
    const response = await this.instance.get(
      `players?_sort=${sort}&_order=${sortDirection}&_limit=${limit}`
    );
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
