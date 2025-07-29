<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require_once("../config/database.php");

$action = $_GET['action'] ?? '';

if ($action === 'fetch') {
    // Fetch all workers ordered by worker_id ascending
    $sql = "SELECT * FROM workers ORDER BY worker_id ASC";
    $result = $conn->query($sql);

    $workers = [];
    while ($row = $result->fetch_assoc()) {
        $workers[] = $row;
    }
    echo json_encode($workers);

} elseif ($action === 'add') {
    // Decode JSON input from request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Set default status to 'Active' if not provided or empty
    $status = isset($data['status']) && !empty($data['status']) ? $data['status'] : 'Active';

    // Prepare and bind SQL statement with parameters
    $stmt = $conn->prepare("INSERT INTO workers (first_name, last_name, date_of_birth, start_date, position, email, phone, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param(
        "ssssssss",
        $data['first_name'],
        $data['last_name'],
        $data['date_of_birth'],
        $data['start_date'],
        $data['position'],
        $data['email'],
        $data['phone'],
        $status // Use defaulted status value here
    );

    // Execute the statement
    $stmt->execute();

    // Return success response as JSON
    echo json_encode(["success" => true]);

} elseif ($action === 'update') {
    // Decode JSON input from request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Prepare and bind SQL update statement
    $stmt = $conn->prepare("UPDATE workers SET first_name=?, last_name=?, date_of_birth=?, start_date=?, position=?, email=?, phone=?, status=? WHERE worker_id=?");
    $stmt->bind_param(
        "ssssssssi",
        $data['first_name'],
        $data['last_name'],
        $data['date_of_birth'],
        $data['start_date'],
        $data['position'],
        $data['email'],
        $data['phone'],
        $data['status'],
        $data['worker_id']
    );

    // Execute the update
    $stmt->execute();

    // Return success response as JSON
    echo json_encode(["success" => true]);

} elseif ($action === 'delete') {
    // Decode JSON input from request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Prepare and bind SQL delete statement
    $stmt = $conn->prepare("DELETE FROM workers WHERE worker_id = ?");
    $stmt->bind_param("i", $data['worker_id']);

    // Execute the delete
    $stmt->execute();

    // Return success response as JSON
    echo json_encode(["success" => true]);
}

$conn->close();


