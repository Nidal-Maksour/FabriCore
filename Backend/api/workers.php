<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require_once("../config/database.php");

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM workers ORDER BY worker_id DESC");
    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode($rows);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$action = $data['action'];

if ($action === 'create') {
    $stmt = $conn->prepare("INSERT INTO workers (first_name, last_name, date_of_birth, start_date, position, email, phone, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $data['first_name'], $data['last_name'], $data['date_of_birth'], $data['start_date'], $data['position'], $data['email'], $data['phone'], $data['status']);
    $stmt->execute();
    echo json_encode(["success" => true]);
    exit;
}

if ($action === 'update') {
    $stmt = $conn->prepare("UPDATE workers SET first_name=?, last_name=?, date_of_birth=?, start_date=?, position=?, email=?, phone=?, status=? WHERE worker_id=?");
    $stmt->bind_param("ssssssssi", $data['first_name'], $data['last_name'], $data['date_of_birth'], $data['start_date'], $data['position'], $data['email'], $data['phone'], $data['status'], $data['id']);
    $stmt->execute();
    echo json_encode(["success" => true]);
    exit;
}

if ($action === 'delete') {
    $stmt = $conn->prepare("DELETE FROM workers WHERE worker_id = ?");
    $stmt->bind_param("i", $data['id']);
    $stmt->execute();
    echo json_encode(["success" => true]);
    exit;
}
?>
