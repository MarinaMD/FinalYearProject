class Node < ActiveRecord::Base
    serialize :parent
    serialize :prob
end
