import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent{
    static className = 'excel__header';
    toHTML() {
        return `
            <input type="text" class="input" value="New Table"/>

            <div>
                <div class="button">
                    <i class="material-symbols-outlined">
                        delete
                    </i>
                </div>
                <div class="button">
                    <i class="material-symbols-outlined">
                        exit_to_app
                    </i>
                </div>
            </div>
        `;
    }
}