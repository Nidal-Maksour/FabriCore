<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

require_once("../vendor/autoload.php");
require_once("../config/database.php");

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// Allow CORS and JSON response headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle OPTIONS preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Get JSON input data
$input = json_decode(file_get_contents("php://input"), true);

$username = trim($input["username"] ?? "");
$password = trim($input["password"] ?? "");

// Validate input fields
if (empty($username) || empty($password)) {
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit;
}

// Check DB connection
if (!$conn) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database connection failed."]);
    exit;
}

// Prepare statement to find user by email OR manager_id
$stmt = $conn->prepare("SELECT * FROM management_team WHERE email = ? OR manager_id = ?");
$stmt->bind_param("ss", $username, $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user) {
    // User not found
    echo json_encode(["success" => false, "message" => "Invalid Email/ID or password."]);
    exit;
}

// Verify password hash
if (!password_verify($password, $user["password"])) {
    echo json_encode(["success" => false, "message" => "Invalid Email/ID or password."]);
    exit;
}

// Prepare JWT payload
$payload = [
    "iss" => "yourdomain.com",
    "iat" => time(),
    "exp" => time() + 3600, // token expires in 1 hour
    "data" => [
        "id" => $user["manager_id"],
        "email" => $user["email"],
        "manager_id" => $user["manager_id"],
        "role" => $user["role"] ?? "manager"
    ]
];

// Encode JWT with secret key from environment variables
$jwt = JWT::encode($payload, $_ENV['JWT_SECRET'], 'HS256');

// Return success response with JWT token and redirect URL
echo json_encode([
    "success" => true,
    "token" => $jwt,
    "redirect" => "/dashboard"
]);

$stmt->close();
$conn->close();
