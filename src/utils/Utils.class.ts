export class Utils {
    public static calculateBaseDamage(strength: number, defence: number): number {
        return strength * (defence / defence);
    }
}
