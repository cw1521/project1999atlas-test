export class Quest {
    name: string;
    reward: string;
    components: string[];
    rewardUsedBy: string[];
    constructor() {
        this.name = null;
        this.reward = null;
        this.components = null;
        this.rewardUsedBy = null;
    }
}