<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle OPTIONS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Enable error reporting for debugging (development only)
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once("../config/database.php");

// Read JSON input from request body
$data = json_decode(file_get_contents("php://input"), true);

$username = $data["username"] ?? "";
$password = $data["password"] ?? "";

// Validate input
if (empty($username) || empty($password)) {
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit;
}

// Check database connection
if (!$conn) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database connection failed."]);
    exit;
}

// Prepare SQL statement to find user by email or manager_id
$stmt = $conn->prepare("SELECT * FROM management_team WHERE email = ? OR manager_id = ?");
$stmt->bind_param("ss", $username, $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

// Check password and respond
if ($user && $user["password"] === $password) {
    echo json_encode([
        "success" => true,
        "message" => "Login successful.",
        "redirect" => "/dashboard"
    ]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid email/ID or password."]);
}

// Close statement and connection
$stmt->close();
$conn->close();

