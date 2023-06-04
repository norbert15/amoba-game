import { DirectionModel } from "src/app/shared/models/direction-model";

export const ICON_CLASSES: string[] = [
    "bi bi-circle",
    "bi bi-x-lg",
    "bi bi-triangle",
    "bi bi-octagon",
    "bi bi-star",
    "bi bi-diamond",
    "bi bi-hash",
    "bi bi-emoji-smile",
    "bi bi-hand-thumbs-up",
    "bi bi-person",
    "bi bi-cup-hot",
    "bi bi-flag"
];

export const USERNAME: string = "amoba";
export const PASSWORD: string = "mester";

export const DIRECTIONS: DirectionModel[] = [
    {
        class: 'vertical-line',
        description: 'Függőleges (fentről - lefele)',
        items: [1, 0]
    },
    {
        class: 'horizontal-line',
        description: 'Vízszíntes (jobbról - balra)',
        items: [0, 1]
    },
    {
        class: 'diagonal-left-line',
        description: 'Átlós (jobb alsó - bal felső)',
        items: [1, 1]
    },
    {
        class: 'diagonal-right-line ',
        description: 'Átlós (bal alsó - jobb felső)',
        items: [1, -1]
    }
];