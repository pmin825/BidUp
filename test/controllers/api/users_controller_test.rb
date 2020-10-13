require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get controller" do
    get api_users_controller_url
    assert_response :success
  end

end
