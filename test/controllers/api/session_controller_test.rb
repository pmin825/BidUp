require 'test_helper'

class Api::SessionControllerTest < ActionDispatch::IntegrationTest
  test "should get controller" do
    get api_session_controller_url
    assert_response :success
  end

end
