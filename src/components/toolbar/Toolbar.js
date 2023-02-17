import {ExcelComponent} from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent{
    static className = 'excel__toolbar';
    toHTML() {
        return `
             <div class="button">
                <i class="material-symbols-outlined">
                    format_bold
                </i>
            </div>
            <div class="button">
                <i class="material-symbols-outlined">
                    format_italic
                </i>
            </div>
            <div class="button">
                <i class="material-symbols-outlined">
                    format_underlined
                </i>
            </div>
            <div class="button">
                <i class="material-symbols-outlined">
                    format_align_left
                </i>
            </div>
            <div class="button">
                <i class="material-symbols-outlined">
                    format_align_center
                </i>
            </div>
            <div class="button">
                <i class="material-symbols-outlined">
                    format_align_right
                </i>
            </div>
        `;
    }
}