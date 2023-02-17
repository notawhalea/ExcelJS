export class DomListener {
    constructor($root) {
        if (!$root)
            throw new Error('There is no $root for DomListener')
        this.$root = $root;
    }
}