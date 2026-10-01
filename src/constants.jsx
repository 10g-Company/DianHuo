export const GOOGLE_PLAY_LINK = "https://play.google.com/store/apps/details?id=co.TENg.DianHuo";

export const REPLENISH_POPOVER = {
    title: "Replenish",
    body:
        `<p>
        <strong>Min</strong> and <strong>Max</strong> define the lower and upper limit of the item quantity that should be
        availabe in the warehouse. When the item's quantity drops below the <strong>Min</strong> level, it will be shown
        as <strong>low-level</strong> item.<br/><br/>
        When you create a replenish order for the item, it will auto-calculate the quantity to
        the <strong>Max</strong> level
        </p>`
};

export const BOM_POPOVER = {
    title: "BOM Definition",
    body:
        `<p>
        Bill of Materials (BOM) is a list of raw materials, sub-assemblies, intermediate assemblies, sub-components, parts and
        the quantities of each needed to manufacture an end product.
        </p>`
};

export const ITEMTYPE_POPOVER = {
    title: "Item Type Definition",
    body:
        `<div>
            3 item types:
            <ol class="alpha-list">
                <li>
                    <strong>Raw:</strong> the base product. Cannot include material.
                </li>
                <li>
                    <strong>SFG:</strong> semi-finished goods. Can include material.
                </li>
                <li>
                    <strong>FG:</strong> finished goods. Can include material.
                </li>
            </ol>

        </div>`
};

export const Link_GetStarted = "/tutorial?topic=get-started";
export const Link_RecordSnapshot = "/tutorial?topic=get-started#item-snapshot";

export const Link_ItemsTab = "/tutorial?topic=data-setup-overview#items-tab";
export const Link_ItemPage = "/tutorial?topic=item";
export const Link_CreateNewItem = "/tutorial?topic=item#create-new-item";
export const Link_ItemSetupBOM = "/tutorial?topic=item#setup-bom";
export const Link_ItemReplenishAttributes = "/tutorial?topic=item#replenish-attributes";

export const Link_ItemSelection = "/tutorial?topic=item-selection";
export const Link_InputCount = "/tutorial?topic=item-selection#input-count";
export const Link_QRScan = "/tutorial?topic=item-selection#qr-scan";

export const Link_SearchPanel = "/tutorial?topic=ui-intro#search-item";
export const Link_ItemListview = "/tutorial?topic=ui-intro#item-listview";

export const Link_TxnPage = "/tutorial?topic=txn";
export const Link_TxnPosted = "/tutorial?topic=posted-txn";
export const Link_TxnEdit = "/tutorial?topic=txn#txn-edit";
export const Link_TxnDelete = "/tutorial?topic=txn#txn-delete";
export const Link_TxnListPage = "/tutorial?topic=txn-overview#transaction-list";
export const Link_TxnOverview = "/tutorial?topic=txn-overview";
export const Link_TxnHowToArchive = "/tutorial?topic=posted-txn#archive-txn";

export const Link_Replenish = "/tutorial?topic=replenish";
export const Link_ReplenishAutoCreate = "/tutorial?topic=replenish#auto-create";
export const Link_ReplenishManualCreate = "/tutorial?topic=replenish#manual-create";
