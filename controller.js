function displayListItem(){
    $sqlSelectAll = "select * from items";
    $resultSelectAll = $this->db->query($sqlSelectAll);
    echo json_encode($resultSelectAll->row_array());
}

